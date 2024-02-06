import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

function textContentChanged(content: string) {
  console.log(content);

}

class App extends React.Component {
  editorRef = React.createRef() as any;

  handleClickButton = () => {
    console.log(this.editorRef.current.getInstance());
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

        />
        <button onClick={this.handleClickButton}>Click!</button>

      </div>
    );
  }
}

export default App;
