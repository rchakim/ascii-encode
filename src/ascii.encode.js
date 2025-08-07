// Creator: Fellicia Faicha Theda
// Copyright (c) 2025 Fellicia Faicha Theda. All rights reserved.

const ascii = {};

/**
 * Encode a string to ASCII values
 * @param {string} code - The input string to encode
 * @param {string} [separator=" "] - Optional separator for encoded values (defaults to space)
 * @returns {string} String of ASCII values or throws error for invalid input
 */
ascii.encode = function(code, separator = " ") {
    // Validate input type
    if (typeof code !== "string") {
        throw new Error(`Input must be a string, got ${typeof code}`);
    }
    // Handle empty string
    if (code === "") {
        return "";
    }
    // Default separator to space if not provided or empty
    separator = separator && separator !== "" ? separator : " ";
    // Convert each character to its ASCII value
    const result = [];
    for (let i = 0; i < code.length; i++) {
        const byte = code.charCodeAt(i);
        if (byte > 255) {
            throw new Error(`Character at position ${i + 1} is outside valid ASCII range (0-255)`);
        }
        result.push(byte);
    }
    return result.join(separator);
};

export {ascii as default};
