import React, { useState } from 'react';
import { Button } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
const { Configuration, OpenAIApi } = require("openai");
console.log(process.env.REACT_APP_OPENAI_API_KEY);
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function generate(prompt: string, setGeneratedText: (text: string) => void) {
  console.log(prompt);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2000
  });
  const text = completion.data.choices[0].text;
  console.log(text);
  setGeneratedText(text);
}
function App() {
  const [promptText, setPromptText] : [string, (text: string) => void] = useState("")
  const [generatedText, setGeneratedText]: [string, (text: string) => void] = useState("")

  return (
    <div className="App">
      <header className="App-header">
      <p>プロンプト</p>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="プロンプトを入力してください"
        onChange={e => setPromptText(e.target.value)}
        value={promptText}
        style={{ height: 100, width: 400 }}
      />
      </header>
      <Button variant="outlined" onClick={() => generate(promptText, setGeneratedText)}>テキスト生成</Button>
      <p>生成結果</p>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="生成されたテキストが出力されます"
        value={generatedText}
        style={{ height: 100, width: 400 }}
      />
    </div>
  );
}
export default App;
