# ASCII Encoder/Decoder

A JavaScript and Lua implementation for encoding strings to ASCII values and decoding ASCII values back to strings.

## Features

- **Encode**: Convert any string to its ASCII representation with customizable separator
- **Decode**: Convert ASCII values (as string or array/table) back to the original string
- **Input Validation**: Thorough error checking for invalid inputs
- **File Support**: Process text files directly (`.txt` extension)
- **Cross-Platform**: Works in both Node.js and browser environments (JavaScript version)
- **Command Line Interface**: Easy to use from terminal/command prompt

## Installation

### JavaScript Version
```bash
npm install ascii-encoder-decoder
```
Or include directly in your HTML:
```html
<script src="ascii.js"></script>
```

### Lua Version
Simply require the file in your Lua project:
```lua
local ascii = require("ascii")
```

## Usage

### JavaScript API

**Encoding:**
```javascript
ascii.encode("Hello", "-"); // Returns "72-101-108-108-111"
```

**Decoding:**
```javascript
ascii.decode("72 101 108 108 111"); // Returns "Hello"
ascii.decode([72, 101, 108, 108, 111]); // Returns "Hello"
```

### Lua API

**Encoding:**
```lua
ascii.encode("Hello", "-") -- Returns "72-101-108-108-111"
```

**Decoding:**
```lua
ascii.decode("72 101 108 108 111") -- Returns "Hello"
ascii.decode({72, 101, 108, 108, 111}) -- Returns "Hello"
```

### Command Line Interface

**JavaScript (Node.js):**
```bash
node ascii.js enc "Hello" "-"  # Encodes with hyphen separator
node ascii.js dec "72-101-108-108-111"  # Decodes with hyphen separator
node ascii.js enc input.txt  # Encodes content of input.txt
```

**Lua:**
```bash
lua ascii.lua encode "Hello" "-"  # Encodes with hyphen separator
lua ascii.lua decode "72-101-108-108-111"  # Decodes with hyphen separator
lua ascii.lua encode input.txt  # Encodes content of input.txt
```

## Error Handling

Both implementations provide detailed error messages for:
- Non-string inputs for encoding
- Invalid ASCII values (outside 0-255 range)
- Malformed input arrays/tables
- File access errors
- Invalid commands

## License

Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For issues or questions, please open an issue on the GitHub repository.