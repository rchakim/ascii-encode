# ASCII Encoder/Decoder

A simple utility to encode strings to ASCII codes and decode ASCII codes back to strings, available in both JavaScript and Lua implementations.

## Features

- Encode strings to ASCII codes with customizable separators
- Decode ASCII codes (as strings or arrays/tables) back to original strings
- Command-line interface for both Node.js and Lua
- Input validation and error handling
- Support for both direct input and file processing

## Installation

### JavaScript/Node.js Version

1. Clone the repository:
```bash
git clone https://github.com/rchakim/ascii-encode.git
cd ascii-encode
```

2. Install dependencies (none required for basic usage)

3. Use the script:
```bash
node ascii.js [command] [input] [separator]
```

### Lua Version

1. Clone the repository:
```bash
git clone https://github.com/rchakim/ascii-encode.git
cd ascii-encode
```

2. Ensure you have Lua installed on your system

3. Use the script:
```bash
lua ascii.lua [command] [input] [separator]
```

## Usage

### Command Line Interface

#### Encoding
```bash
# JavaScript version
node ascii.js enc "Hello World" ","
# Output: 72,101,108,108,111,32,87,111,114,108,100

# Lua version
lua ascii.lua encode "Hello World" ","
# Output: 72,101,108,108,111,32,87,111,114,108,100
```

#### Decoding
```bash
# JavaScript version
node ascii.js dec "72 101 108 108 111 32 87 111 114 108 100"
# Output: Hello World

# Lua version
lua ascii.lua decode "72 101 108 108 111 32 87 111 114 108 100"
# Output: Hello World
```

#### File Processing
```bash
# JavaScript version
node ascii.js enc input.txt ","
node ascii.js dec encoded.txt

# Lua version
lua ascii.lua encode input.txt ","
lua ascii.lua decode encoded.txt
```

### Programmatic Usage

#### JavaScript
```javascript
const ascii = require('./ascii.js');

// Encoding
const encoded = ascii.encode("Hello", "-");
console.log(encoded); // "72-101-108-108-111"

// Decoding
const decoded = ascii.decode("72 101 108 108 111");
console.log(decoded); // "Hello"
```

#### Lua
```lua
local ascii = require('ascii')

-- Encoding
local encoded = ascii.encode("Hello", "-")
print(encoded) -- "72-101-108-108-111"

-- Decoding
local decoded = ascii.decode("72 101 108 108 111")
print(decoded) -- "Hello"
```

## API Documentation

### JavaScript API

#### `ascii.encode(code, separator)`
- `code`: String to encode (required)
- `separator`: Separator between ASCII codes (default: " ")
- Returns: String of ASCII codes separated by specified separator
- Throws: Error if input is invalid or contains non-ASCII characters

#### `ascii.decode(code)`
- `code`: Can be either:
  - String of ASCII codes separated by non-digit characters
  - Array of numbers representing ASCII codes
- Returns: Decoded string
- Throws: Error if input is invalid or contains values outside 0-255 range

### Lua API

#### `ascii.encode(code, separator)`
- `code`: String to encode (required)
- `separator`: Separator between ASCII codes (default: " ")
- Returns: String of ASCII codes separated by specified separator
- Throws: Error if input is invalid or contains non-ASCII characters

#### `ascii.decode(code)`
- `code`: Can be either:
  - String of ASCII codes separated by non-digit characters
  - Table of numbers representing ASCII codes
- Returns: Decoded string
- Throws: Error if input is invalid or contains values outside 0-255 range

## Error Handling

Both implementations provide detailed error messages for:
- Invalid input types
- ASCII values outside the valid range (0-255)
- File access errors
- Malformed array/table inputs

## License

Free and open source for all cases.

This project is licensed under the MIT License.