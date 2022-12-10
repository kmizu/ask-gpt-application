import React from 'react';
import logo from './logo.svg';
import { Button } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>プロンプト</p>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="プロンプトを入力してください"
        defaultValue=""
        style={{ height: 100, width: 400 }}
      />
      </header>
      <Button variant="outlined">テキスト生成</Button>
      <p>生成結果</p>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="生成されたテキストが出力されます"
        defaultValue=""
        style={{ height: 100, width: 400 }}
      />
    </div>
  );
}
export default App;
