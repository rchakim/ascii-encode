// Creator: Fellicia Faicha Theda
// Copyright (c) 2025 Fellicia Faicha Theda. All rights reserved.

const ascii = {};

/**
 * Decode ASCII values to a string
 * @param {string|number[]} code - String of space-separated ASCII values or array of numbers
 * @returns {string} Decoded string or throws error for invalid input
 */
ascii.decode = function(code) {
    if (!code) {
        return "";
    }
    let result = "";
    if (typeof code === "string") {
        // Handle empty string
        if (code === "") {
            return "";
        }
        // Split by any non-digit separator and convert to characters
        const values = code.match(/\d+/g) || [];
        for (const v of values) {
            const num = parseInt(v);
            if (isNaN(num) || num < 0 || num > 255) {
                throw new Error(`Invalid ASCII value: ${v}`);
            }
            result += String.fromCharCode(num);
        }
    } else if (Array.isArray(code)) {
        // Convert array of numbers to characters
        for (let i = 0; i < code.length; i++) {
            const v = code[i];
            if (typeof v !== "number" || v < 0 || v > 255) {
                throw new Error(`Invalid ASCII value at index ${i + 1}: ${v}`);
            }
            result += String.fromCharCode(v);
        }
    } else {
        throw new Error(`Input must be a string or array, got ${typeof code}`);
    }
    return result;
};

export {ascii as default};
