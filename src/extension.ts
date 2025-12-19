import * as vscode from 'vscode';

let catDecorationType: vscode.TextEditorDecorationType;
let animationInterval: NodeJS.Timeout | null = null;
let isCatRunning = false;
let currentLineIndex = 0;

const CAT_FRAMES = ['🐱', '😼', '🐈', '😺', '😸'];
const RUN_ANIMATION = ['🐱', '🏃', '💨'];

export function activate(context: vscode.ExtensionContext) {
  catDecorationType = vscode.window.createTextEditorDecorationType({
    backgroundColor: new vscode.ThemeColor('editor.background'),
    isWholeLine: false,
    after: {
      contentText: '🐱',
      color: new vscode.ThemeColor('editor.foreground'),
      margin: '0 0 0 10px',
      fontWeight: 'bold'
    }
  });

  // Register commands
  const toggleCommand = vscode.commands.registerCommand('running-cat.toggleCat', () => {
    if (isCatRunning) {
      stopCat();
    } else {
      startCat();
    }
  });

  const startCommand = vscode.commands.registerCommand('running-cat.startCat', () => {
    if (!isCatRunning) {
      startCat();
    }
  });

  const stopCommand = vscode.commands.registerCommand('running-cat.stopCat', () => {
    if (isCatRunning) {
      stopCat();
    }
  });

  context.subscriptions.push(toggleCommand, startCommand, stopCommand, catDecorationType);

  startCat();
}

function startCat() {
  if (isCatRunning) {
    return;
  }

  isCatRunning = true;
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showInformationMessage('Open a file to see the running cat! 🐱');
    return;
  }

  let frameIndex = 0;
  currentLineIndex = 0;

  animationInterval = setInterval(() => {
    const activeEditor = vscode.window.activeTextEditor;

    if (!activeEditor) {
      stopCat();
      return;
    }

    const lineCount = activeEditor.document.lineCount;

    if (lineCount === 0) {
      return;
    }

    currentLineIndex = (currentLineIndex + 1) % lineCount;
    frameIndex = (frameIndex + 1) % CAT_FRAMES.length;

    const line = activeEditor.document.lineAt(currentLineIndex);
    const lineLength = line.text.length;
    const range = new vscode.Range(
      new vscode.Position(currentLineIndex, Math.max(0, lineLength)),
      new vscode.Position(currentLineIndex, Math.max(0, lineLength))
    );

    const decoration = {
      range: range,
      renderOptions: {
        after: {
          contentText: ` ${CAT_FRAMES[frameIndex]}`,
          color: new vscode.ThemeColor('editor.foreground'),
          backgroundColor: 'rgba(255, 200, 100, 0.15)',
          margin: '0 0 0 8px'
        }
      }
    };

    activeEditor.setDecorations(catDecorationType, [decoration]);
  }, 400);
}

function stopCat() {
  isCatRunning = false;

  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }

  const editor = vscode.window.activeTextEditor;
  if (editor) {
    editor.setDecorations(catDecorationType, []);
  }
}

export function deactivate() {
  stopCat();
}
