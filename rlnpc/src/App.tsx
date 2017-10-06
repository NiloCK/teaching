import * as React from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';
import { Play } from './components/Buttons';

const logo = require('./logo.svg');

class App extends React.Component {
  editor: monaco.editor.ICodeEditor;

  handleEditorDidMount = (editor: {}) => {
    this.editor = editor as monaco.editor.ICodeEditor;
  }

  runEditorCode = () => {
    this.clearTurtleCanvas();
    eval(this.editor.getValue());
  }
  clearTurtleCanvas = () => {
    let cvs = document.getElementById('turtleCanvas') as HTMLCanvasElement;
    let ctx = cvs.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, cvs.height, cvs.width);
  }

  getEditorCode = () => {
    return this.editor.getValue();
  }

  render() {
    let editorWidth: number = window.innerWidth / 2;
    let editorHeight: number = window.innerHeight;

    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to the RLNPC</h2>
        </div>
        <div className="App-intro">
          <Play click={this.runEditorCode} />
        </div>
        <div id="EditorAndCanvas">
          <MonacoEditor
            width={editorWidth}
            height={editorHeight}
            language="typescript"
            theme="vs-dark"
            value="// Type your code in here.\n\n"
            options={{
              codeLens: false,
              lineNumbersMinChars: 3,
              /* minimap: { enabled: false }, */
              /* showFoldingControls: "always", */
              snippetSuggestions: 'none',
              wordBasedSuggestions: false
            }}
            text-align="left"
            editorDidMount={this.handleEditorDidMount}
          />
          <canvas
            id="turtleCanvas"
            width={editorWidth}
            height={editorHeight}
          />
        </div>
      </div>
    );
  }
}

export default App;
