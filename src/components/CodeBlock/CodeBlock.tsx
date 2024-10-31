import AceEditor, { IMarker } from 'react-ace';
import { IconContext } from 'react-icons';
import { FaPlay } from 'react-icons/fa';
import 'brace/mode/python';
import 'brace/theme/monokai';
import './CodeBlock.css';

const markers: IMarker[] = [
  {
    startRow: 3,
    startCol: 1,
    endRow: 4,
    endCol: 1,
    className: 'python-editor',
    type: 'text',
    inFront: true,
  },
];

interface Props {
  title:string;
  defaultValue: string;
  loading:boolean;
  onChange: (value: string, event?: any) => void;
  playBtnOnClick: () => void;
}

export function CodeBlock(props: Props) {
  return (
    <div className="code-block-container">
      <IconContext.Provider value={{ color: '#0b0', size: '2em' }}>
        <div className="header-container">
          <span className="title">{props.title}</span>
          {props.loading?
          <span>loading...</span>:
          <FaPlay onClick={props.playBtnOnClick} style={{cursor:"pointer"}} />
          }
        </div>
      </IconContext.Provider>
      <AceEditor
        onChange={props.onChange}
        mode='python'
        theme='monokai'
        width='100%'
        name='ace-editor'
        fontSize="1em"
        editorProps={{ $blockScrolling: false }}
        value={props.defaultValue}
        showGutter
        highlightActiveLine
        showPrintMargin
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
        style={{
          maxWidth: '600px',
          height: '300px',
        }}
        markers={markers}
      />
    </div>
  );
}
