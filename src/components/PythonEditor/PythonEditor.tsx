import { useState } from 'react';
import { usePython } from 'react-py';
import { CodeBlock } from '../CodeBlock/CodeBlock';

interface Props{
  title:string;
  defaultCode?:string;
}

export function PythonEditor(props:Props){
    const [code, setCode] = useState<string>(props.defaultCode ?? '');
    const [inputText, setInputText] = useState<string>("");

    const { runPython, stdout, stderr, isLoading, isRunning, isAwaitingInput, sendInput } = usePython();

    const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
    ) => {
      sendInput(inputText)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing || e.key !== 'Enter') return
      handleSubmit(e)
    }

    return (<>
    <div style={{ fontFamily: 'monospace', width: '600px', margin: '3em auto' }}>
      <CodeBlock
        title={props.title}
        defaultValue={code}
        loading={isLoading}
        onChange={(value)=>{setCode(value)}}
        playBtnOnClick={() => {
          runPython(code);
        }}/>
      {isRunning && <p>Running...</p>}
      <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px', backgroundColor: '#222', borderRadius:"10px", fontFamily:"meirio"}}>
        <b style={{ display:"inline-block", padding:"2em 2px", marginBottom:"1em", borderBottom:"solid 1px #ddd", color:"#fff"}}>Console Output:</b>
        <div style={{maxHeight:"10em", overflow:"scroll"}}>
        {stdout && (
          <pre style={{display:"inline", color: 'green' }}>{stdout}</pre>
        )}
        {stderr && (
          <pre style={{display:"inline", color: 'red' }}>{stderr}</pre>
        )}
        <input type="text" name=""
          // disabled={!isAwaitingInput}
          onChange={(event)=>setInputText(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{display:"inline",background:"transparent", color:"#fff", border:"none"}}/>
        </div>
      </div>
    </div>
    </>)
}