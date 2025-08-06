# ASCII Encoder/Decoder Module

## Overview
This Lua module provides functions to encode strings to ASCII values and decode ASCII values back to strings. It supports both command-line usage and integration into other Lua projects. The module handles validation of input values to ensure they fall within the valid ASCII range (0-255).

## Installation
1. Download the `ascii.lua` file from the repository:
   ```bash
   git clone https://github.com/rchakim/ascii-encode.git
   cd ascii-encode
   ```

2. Alternatively, you can download the file directly from GitHub and place it in your project directory.

3. To use the module in your Lua project, simply require it:
   ```lua
   local ascii = require("ascii")
   ```

## Usage

### As a Module
```lua
local ascii = require("ascii")

-- Encoding a string to ASCII values
local encoded = ascii.encode("Hello", "-")  -- Returns "72-101-108-108-111"

-- Decoding ASCII values to a string
local decoded = ascii.decode("72 101 108 108 111")  -- Returns "Hello"
```

### Command Line Interface
The module can be used directly from the command line:
```bash
lua ascii.lua enc "Hello" "-"  # Outputs: 72-101-108-108-111
lua ascii.lua dec "72 101 108 108 111"  # Outputs: Hello
```

#### File Support
You can also process text files (`.txt` extension):
```bash
lua ascii.lua enc input.txt ","  # Encodes content of input.txt with comma separator
lua ascii.lua dec input.txt      # Decodes content of input.txt
```

For table input (either from command line or file), use Lua table syntax:
```bash
lua ascii.lua dec "{72, 101, 108, 108, 111}"  # Outputs: Hello
```

## Conclusion
This module provides a simple yet robust solution for ASCII encoding and decoding in Lua. It includes comprehensive input validation and supports multiple input formats, making it suitable for various use cases including data processing and encoding tasks.

## Attention
- The module strictly validates ASCII ranges (0-255). Any value outside this range will throw an error.
- When using the command-line interface, ensure proper quoting of arguments, especially when containing spaces or special characters.
- For file processing, the module only accepts `.txt` files and expects proper formatting for table inputs.
- The `load()` function is used for table parsing - be cautious when processing untrusted input.

### Happy Coding 🎉
