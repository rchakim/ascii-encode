-- Creator: Alicia Suya Firmansyah
-- Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.

--- Encode a string to ASCII values
-- @param code The input string to encode
-- @param separator Optional separator for encoded values (defaults to space)
-- @return String of ASCII values or throws error for invalid input
local encode = function(code, separator)
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

return {encode}
