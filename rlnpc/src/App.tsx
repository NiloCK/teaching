import * as React from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';

const logo = require('./logo.svg');

class App extends React.Component {
  editor: any;

  handleEditorDidMount = (editor: any) => {
    this.editor = editor;
    console.log(
      (this.editor as MonacoEditor)
    );
    editor.height = (document.getElementsByClassName("App")[0] as HTMLDivElement).clientHeight -
      ((document.getElementsByClassName("App-header")[0] as HTMLDivElement).clientHeight +
        (document.getElementsByClassName("App-intro")[0] as HTMLDivElement).clientHeight)
  }

  render() {
    let editorWidth: number = window.innerWidth / 2;
    let editorHeight: number = window.innerHeight;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RLNPC</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div id="EditorAndCanvas">
          <MonacoEditor
            width={editorWidth}
            height={editorHeight}
            language="typescript"
            theme="vs-dark"
            value=""
            text-align="left"
            editorDidMount={this.handleEditorDidMount}
          />
          <canvas id="canvas"
            width={editorWidth}
            height={editorHeight}
          />
        </div>
      </div>
    );
  }
}

export default App;
