-- Creator: Alicia Suya Firmansyah
-- Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.

local ascii = {}

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

return ascii
