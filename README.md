# ASCII Encoder/Decoder Library

A cross-language library for encoding strings to ASCII codes and decoding ASCII codes back to strings. Available in JavaScript (Node.js/browser), Lua, and Python.

## Installation

Clone the repository from GitHub:

```bash
git clone https://github.com/rchakim/ascii-encode.git
cd ascii-encode
```

## Usage

### JavaScript (Node.js)

```javascript
const ascii = require('./ascii.js');

// Encoding
const encoded = ascii.encode("Hello", "-"); // "72-101-108-108-111"

// Decoding
const decoded = ascii.decode("72 101 108 108 111"); // "Hello"
```

#### Command Line (Node.js):

```bash
node ascii.js enc "Hello" "-"  # Output: 72-101-108-108-111
node ascii.js dec "72 101 108 108 111"  # Output: Hello
```

### JavaScript (Browser)

Include the script in your HTML:

```html
<script src="ascii.js"></script>
<script>
  // Encoding
  const encoded = ascii.encode("Hello", ","); // "72,101,108,108,111"
  
  // Decoding
  const decoded = ascii.decode("72,101,108,108,111"); // "Hello"
</script>
```

### Lua

```lua
local ascii = require('ascii')

-- Encoding
local encoded = ascii.encode("Hello", ".") -- "72.101.108.108.111"

-- Decoding
local decoded = ascii.decode("72 101 108 108 111") -- "Hello"
```

#### Command Line (Lua):

```bash
lua ascii.lua enc "Hello" "."  # Output: 72.101.108.108.111
lua ascii.lua dec "72 101 108 108 111"  # Output: Hello
```

### Python

```python
from ascii import ASCII

# Encoding
encoded = ASCII.encode("Hello", " ")  # "72 101 108 108 111"

# Decoding
decoded = ASCII.decode("72 101 108 108 111")  # "Hello"
```

#### Command Line (Python):

```bash
python ascii.py enc "Hello" "_"  # Output: 72_101_108_108_111
python ascii.py dec "72 101 108 108 111"  # Output: Hello
```

## File Processing

All implementations support processing text files (`.txt`):

```bash
# Encoding a file
node ascii.js enc input.txt ","

# Decoding a file
python ascii.py dec encoded.txt
```

## Features

- Encode strings to ASCII codes with custom separators
- Decode ASCII codes back to strings
- Support for both string and array/list/table inputs
- File processing capabilities
- Input validation and error handling
- Cross-language consistency

## Notes

1. ASCII range is strictly enforced (0-255)
2. Default separator is space (" ")
3. Empty strings return empty strings
4. Invalid inputs throw appropriate errors

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
