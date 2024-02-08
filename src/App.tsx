import React from 'react';
import logo from './logo.svg';
import './App.css';

// import '@toast-ui/editor/dist/toastui-editor.css';
import './editor.css'

import { Editor } from '@toast-ui/react-editor';

// Color Syntax Plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

// Chart Plugin
import '@toast-ui/chart/dist/toastui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';

// Code Syntax Highlight Plugin
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// Table Merged Cell Plugin
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

// UML Plugin
import uml from '@toast-ui/editor-plugin-uml';

function textContentChanged(content: string) {
  console.log(content);
}

const editor = new Editor({
  // el: document.querySelector('#editor'),
  previewStyle: 'vertical',
  height: '500px',
  initialEditType: 'wysiwyg',
  initialValue: 'Select some text and choose a color from the toolbar.',
  plugins: [colorSyntax]
});

class App extends React.Component {
  editorRef = React.createRef() as any;

  handleClickButton = () => {
    console.log(this.editorRef.current.getInstance());
    console.log(this.editorRef.current.getHTML());
    // console.log(this.editorRef.current.getInstance().GetMarkdown());
    console.log(this.editorRef.current.getRootElement());
    console.log(this.editorRef.current.getRootElement());

    this.editorRef.current.getRootElement().classList.add('my-editor-root');
  };

  render() {
    return (
      <div className="App">
        <Editor
          onChange={textContentChanged}
          usageStatistics={false}
          ref={this.editorRef}
          plugins={[colorSyntax, chart, codeSyntaxHighlight, tableMergedCell, uml]}
        />
        {/* <div id="editor"></div> */}
        <button onClick={this.handleClickButton}>Click!</button>

      </div>
    );
  }
}

export default App;
