# cat-emoji-vs-code

⚠️ **Testing Only** - This is a test project to explore how VS Code extensions work. It's not intended for production use or public download.

## What It Does

This extension runs emoji animations (🐱, 😼, 🐈) across your code lines in VS Code. That's it! Nothing more, nothing less.

## Features

- Animated cat emojis running between code lines
- Toggle on/off with commands
- Auto-starts when the extension loads

## Commands

- `running-cat.toggleCat` - Toggle the running cat on/off
- `running-cat.startCat` - Start the running cat
- `running-cat.stopCat` - Stop the running cat

## Usage

1. Open any file in VS Code
2. Open the Command Palette (`Ctrl+Shift+P`)
3. Search for "Running Cat" and select a command
4. Watch emojis run through your lines

## Development Setup

```bash
npm install
npm run compile
# Press F5 to launch in debug mode
```

---

**Note**: This is purely a learning project for understanding VS Code extension development. Don't expect any real functionality beyond emoji animation!
