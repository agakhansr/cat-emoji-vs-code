# Running Cat Extension - Project Instructions

## Project Overview
A fun VS Code extension that displays an animated cat running between code lines.

## Setup Completed
- ✅ TypeScript extension project scaffolded
- ✅ Dependencies installed (TypeScript, @types/vscode)
- ✅ Code compiled to JavaScript
- ✅ Extension activation configured

## How to Run

### Debug Mode
1. Press `F5` to launch the extension in a new VS Code window
2. The cat will automatically start running between your code lines
3. Use the command palette (`Ctrl+Shift+P`) and search "Running Cat" to control it

### Commands Available
- `Running Cat: Toggle Running Cat` - Turn the cat on/off
- `Running Cat: Start Running Cat` - Activate the cat
- `Running Cat: Stop Running Cat` - Deactivate the cat

## Extension Features
- Animated cat emoji that cycles through different expressions (🐱, 😼, 🐈)
- Automatically runs through all open document lines
- Starts automatically when extension loads
- Can be toggled on/off via commands

## File Structure
```
.
├── src/
│   └── extension.ts       # Main extension code
├── .vscode/
│   ├── launch.json        # Debug configuration
│   └── tasks.json         # Build tasks
├── out/
│   └── extension.js       # Compiled JavaScript
├── package.json           # Extension manifest
├── README.md              # User documentation
└── tsconfig.json          # TypeScript configuration
```

## Development Workflow
1. Edit `src/extension.ts`
2. Run `npm run compile` to build
3. Press `F5` to test in debug mode

## Troubleshooting
- If the cat doesn't appear, ensure you have an open file in the editor
- The extension activates on startup, so no manual activation is needed
- Use the Stop command if you want to pause the animation
