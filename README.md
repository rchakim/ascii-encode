# ASCII Encoder/Decoder

A cross-platform utility for encoding strings to ASCII values and decoding ASCII values back to strings, available in both JavaScript (Node.js and browser) and Lua implementations.

## Installation

Clone the repository:
```bash
git clone https://github.com/rchakim/ascii-encode.git
cd ascii-encode
```

## Usage

### JavaScript Version

#### In Node.js

**As a Module:**
```javascript
const ascii = require('./ascii.js');

// Encoding
const encoded = ascii.encode("Hello", "-"); // Returns "72-101-108-108-111"

// Decoding
const decoded = ascii.decode("72 101 108 108 111"); // Returns "Hello"
const decodedFromArray = ascii.decode([72, 101, 108, 108, 111]); // Returns "Hello"
```

**Command Line Interface:**
```bash
# Encode a string
node ascii.js enc "Hello" "-"

# Decode ASCII values
node ascii.js dec "72 101 108 108 111"

# Encode from a file
node ascii.js enc input.txt

# Decode from a file
node ascii.js dec input.txt
```

#### In Browser

Include the script in your HTML:
```html
<script src="ascii.js"></script>
<script>
  // Encoding
  const encoded = ascii.encode("Hello", "-"); // Returns "72-101-108-108-111"
  
  // Decoding
  const decoded = ascii.decode("72 101 108 108 111"); // Returns "Hello"
  const decodedFromArray = ascii.decode([72, 101, 108, 108, 111]); // Returns "Hello"
</script>
```

### Lua Version

**As a Module:**
```lua
local ascii = require('ascii')

-- Encoding
local encoded = ascii.encode("Hello", "-") -- Returns "72-101-108-108-111"

-- Decoding
local decoded = ascii.decode("72 101 108 108 111") -- Returns "Hello"
local decodedFromTable = ascii.decode({72, 101, 108, 108, 111}) -- Returns "Hello"
```

**Command Line Interface:**
```bash
# Encode a string
lua ascii.lua encode "Hello" "-"

# Decode ASCII values
lua ascii.lua decode "72 101 108 108 111"

# Encode from a file
lua ascii.lua encode input.txt

# Decode from a file
lua ascii.lua decode input.txt
```

## Features

- **String Encoding**: Convert any string to its ASCII values with customizable separators
- **Value Decoding**: Convert ASCII values (as strings or arrays/tables) back to the original string
- **Cross-Platform**: Works in Node.js, browsers, and Lua environments
- **File Support**: Process text files directly from command line
- **Error Handling**: Comprehensive validation and error messages
- **Unicode Safety**: Ensures all characters are within valid ASCII range (0-255)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.