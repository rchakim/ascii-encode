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

// Command-line interface (Node.js)
if (typeof process !== "undefined" && process.argv.length >= 4) {
    const fs = require("fs").promises;
    const command = process.argv[2].toLowerCase();
    const input = process.argv[3];
    const separator = process.argv[4] || " ";

    (async () => {
        try {
            let result;
            // Check if input is a file (ends with .txt)
            if (input.endsWith(".txt")) {
                try {
                    const content = await fs.readFile(input, "utf8");
                    if (command === "enc") {
                        result = ascii.encode(content, separator);
                    } else if (command === "dec") {
                        // Handle potential array input from file
                        if (content.match(/^\s*\[.*\]\s*$/)) {
                            const array = JSON.parse(content);
                            if (!Array.isArray(array)) {
                                throw new Error("Invalid array format in file");
                            }
                            result = ascii.decode(array);
                        } else {
                            result = ascii.decode(content);
                        }
                    } else {
                        throw new Error(`Unknown command: ${command}. Use 'enc' or 'dec'`);
                    }
                } catch (fileError) {
                    throw new Error(`Failed to open file: ${input}`);
                }
            } else {
                // Original behavior for non-file input
                if (command === "enc") {
                    result = ascii.encode(input, separator);
                } else if (command === "dec") {
                    // Handle potential array input from command line
                    if (input.match(/^\s*\[.*\]\s*$/)) {
                        const array = JSON.parse(input);
                        if (!Array.isArray(array)) {
                            throw new Error("Invalid array format");
                        }
                        result = ascii.decode(array);
                    } else {
                        result = ascii.decode(input);
                    }
                } else {
                    throw new Error(`Unknown command: ${command}. Use 'enc' or 'dec'`);
                }
            }
            console.log(result);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    })();
} else {
    window.ascii = ascii;
}