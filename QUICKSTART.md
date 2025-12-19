# Quick Start Guide - Running Cat Extension

## What is this?
A fun VS Code extension that displays an animated cat 🐱 running through your code!

## Getting Started

### Step 1: Open in VS Code
1. The project is already open in VS Code at: `c:\Users\Kamran\Desktop\test-ext`

### Step 2: Test the Extension
1. Press **F5** to launch the extension in a new VS Code window
   - This opens the extension in "debug mode"
   - A new VS Code window will appear with the extension active

### Step 3: See the Cat in Action
1. In the new window, open any file (or create a new one)
2. The cat 🐱 will automatically start running through your code lines
3. Watch the animated cat bounce between lines with different expressions!

### Step 4: Control the Cat
Use the **Command Palette** (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac) and search for:
- **"Toggle Running Cat"** - Turn the cat on/off
- **"Start Running Cat"** - Start the animation
- **"Stop Running Cat"** - Stop the animation

## Features
- 🐱 Cute animated cat emoji (cycles through 5 different expressions)
- 🎨 Works with all VS Code themes
- ⚡ Automatic activation when extension loads
- 🎮 Easy on/off commands
- 💬 Friendly status messages

## Making Changes
If you want to modify the extension:

1. Edit the code in **`src/extension.ts`**
2. Compile it: Run `npm run compile` in the terminal
3. Press **Ctrl+R** in the debug window to reload the extension

## File Structure
- **`src/extension.ts`** - Main extension code
- **`out/extension.js`** - Compiled JavaScript (auto-generated)
- **`package.json`** - Extension manifest and dependencies
- **`.vscode/launch.json`** - Debug configuration (F5)
- **`.vscode/tasks.json`** - Build tasks

## Troubleshooting
- **Cat isn't showing?** Make sure you have a file open in the editor
- **Want to stop it?** Use `Stop Running Cat` command or toggle it off
- **Need to rebuild?** Run `npm run compile` then reload the debug window

## Have Fun! 🎉
Your running cat extension is ready to brighten up your coding sessions!
