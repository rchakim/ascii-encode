# Creator: Alicia Suya Firmansyah
# Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.

import sys
import re

class ASCII:
    @staticmethod
    def encode(code, separator=" "):
        """
        Encode a string to ASCII values
        :param code: The input string to encode
        :param separator: Optional separator for encoded values (defaults to space)
        :return: String of ASCII values
        :raises: ValueError for invalid input
        """
        if not isinstance(code, str):
            raise ValueError(f"Input must be a string, got {type(code)}")
        
        if not code:
            return ""
        
        separator = separator if separator else " "
        
        result = []
        for i, char in enumerate(code, 1):
            byte = ord(char)
            if byte > 255:
                raise ValueError(f"Character at position {i} is outside valid ASCII range (0-255)")
            result.append(str(byte))
        
        return separator.join(result)

    @staticmethod
    def decode(code):
        """
        Decode ASCII values to a string
        :param code: String of space-separated ASCII values or list of numbers
        :return: Decoded string
        :raises: ValueError for invalid input
        """
        if not code:
            return ""
        
        result = []
        
        if isinstance(code, str):
            if not code.strip():
                return ""
            
            # Split by any non-digit separator and convert to characters
            for v in re.findall(r'\d+', code):
                num = int(v)
                if num < 0 or num > 255:
                    raise ValueError(f"Invalid ASCII value: {v}")
                result.append(chr(num))
                
        elif isinstance(code, (list, tuple)):
            # Convert list of numbers to characters
            for i, v in enumerate(code, 1):
                if not isinstance(v, int) or v < 0 or v > 255:
                    raise ValueError(f"Invalid ASCII value at index {i}: {v}")
                result.append(chr(v))
        else:
            raise ValueError(f"Input must be a string or list, got {type(code)}")
        
        return "".join(result)


def main():
    if len(sys.argv) >= 2:
        command = sys.argv[1].lower()
        input_data = sys.argv[2] if len(sys.argv) >= 3 else ""
        separator = sys.argv[3] if len(sys.argv) >= 4 else " "
        
        try:
            if input_data.endswith('.txt'):
                with open(input_data, 'r') as file:
                    content = file.read()
                
                if command == "enc":
                    result = ASCII.encode(content, separator)
                elif command == "dec":
                    # Handle potential list input from file
                    if content.strip().startswith('[') and content.strip().endswith(']'):
                        try:
                            import ast
                            lst = ast.literal_eval(content.strip())
                            if not isinstance(lst, list):
                                raise ValueError("Invalid list format in file")
                            result = ASCII.decode(lst)
                        except (ValueError, SyntaxError) as e:
                            raise ValueError("Invalid list format in file") from e
                    else:
                        result = ASCII.decode(content)
                else:
                    raise ValueError(f"Unknown command: {command}. Use 'enc' or 'dec'")
            else:
                # Original behavior for non-file input
                if command == "enc":
                    result = ASCII.encode(input_data, separator)
                elif command == "dec":
                    # Handle potential list input from command line
                    if input_data.strip().startswith('[') and input_data.strip().endswith(']'):
                        try:
                            import ast
                            lst = ast.literal_eval(input_data.strip())
                            if not isinstance(lst, list):
                                raise ValueError("Invalid list format")
                            result = ASCII.decode(lst)
                        except (ValueError, SyntaxError) as e:
                            raise ValueError("Invalid list format") from e
                    else:
                        result = ASCII.decode(input_data)
                else:
                    raise ValueError(f"Unknown command: {command}. Use 'enc' or 'dec'")
            
            print(result)
        except Exception as e:
            print(f"Error: {str(e)}", file=sys.stderr)
            sys.exit(1)
    else:
        # If no command line arguments, just make the class available
        return ASCII


if __name__ == "__main__":
    main()
else:
    # When imported as a module
    ASCII = main()