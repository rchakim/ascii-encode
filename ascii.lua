-- Creator: Alicia Suya Firmansyah
-- Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.

local ascii = {}

--- Encode a string to ASCII values
-- @param code The input string to encode
-- @param separator Optional separator for encoded values (defaults to space)
-- @return String of ASCII values or throws error for invalid input
ascii.encode = function(code, separator)
	-- Validate input type
	if type(code) ~= "string" then
		error("Input must be a string, got " .. type(code), 2)
	end
	-- Handle empty string
	if code == "" then
		return ""
	end
	-- Default separator to space if not provided or empty
	separator = (separator and separator ~= "") and separator or " "
	-- Convert each character to its ASCII value
	local tbl = {}
	for i = 1, #code do
		local byte = string.byte(code, i)
		if byte > 255 then
			error("Character at position " .. i .. " is outside valid ASCII range (0-255)", 2)
		end
		tbl[i] = byte
	end
	return table.concat(tbl, separator)
end

--- Decode ASCII values to a string
-- @param code String of space-separated ASCII values or table of numbers
-- @return Decoded string or throws error for invalid input
ascii.decode = function(code)
	if not code then
		return ""
	end
	local res = ""
	if type(code) == "string" then
		-- Handle empty string
		if code == "" then
			return ""
		end
		-- Split by any non-digit separator and convert to characters
		for v in code:gmatch("%d+") do
			local num = tonumber(v)
			if not num or num < 0 or num > 255 then
				error("Invalid ASCII value: " .. v, 2)
			end
			res = res .. string.char(num)
		end
	elseif type(code) == "table" then
		-- Convert table of numbers to characters
		for i, v in ipairs(code) do
			if type(v) ~= "number" or v < 0 or v > 255 then
				error("Invalid ASCII value at index " .. i .. ": " .. tostring(v), 2)
			end
			res = res .. string.char(v)
		end
	else
		error("Input must be a string or table, got " .. type(code), 2)
	end
	return res
end

-- Command-line interface
if arg and #arg >= 2 then
	local command = arg[1]:lower()
	local input = arg[2]
	local separator = arg[3] or " "
	local status, res = pcall(function()
		-- Check if input is a file (ends with .lua)
		if input:match("%.txt$") then
			local file = io.open(input, "r")
			if not file then
				error("Failed to open file: " .. input)
			end
			local content = file:read("*a")
			file:close()

			if command == "enc" then
				return ascii.encode(content, separator)
			elseif command == "dec" then
				-- Handle potential table input from file
				if content:match("^%s*{.+}%s*$") then
					local tbl = load("return " .. content)()
					if type(tbl) ~= "table" then
						error("Invalid table format in file")
					end
					return ascii.decode(tbl)
				else
					return ascii.decode(content)
				end
			else
				error("Unknown command: " .. command .. ". Use 'enc' or 'dec'")
			end
		else
			-- Original behavior for non-file input
			if command == "enc" then
				return ascii.encode(input, separator)
			elseif command == "dec" then
				-- Handle potential table input from command line
				if input:match("^%s*{.+}%s*$") then
					local tbl = load("return " .. input)()
					if type(tbl) ~= "table" then
						error("Invalid table format")
					end
					return ascii.decode(tbl)
				else
					return ascii.decode(input)
				end
			else
				error("Unknown command: " .. command .. ". Use 'enc' or 'dec'")
			end
		end
	end)

	if status then
		print(res)
	else
		print("Error: " .. res)
		os.exit(1)
	end
else
	return ascii
end
