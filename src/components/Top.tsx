import { PythonEditor } from "./PythonEditor/PythonEditor"
import {tutorials} from "../tutorials"


export function Top() {
  return (<div style={{maxWidth:"700px", margin:"0 auto", /*backgroundColor:"#ffffffaa", boxShadow:"#ffffffaa 0 0 20px 20px", borderRadius:"20px"*/}}>
    {tutorials.map((tutorial)=>{
      return (
      <div style={{padding:"0 2em"}}>
          <h2 className="title" style={{textAlign:"center"}}>{tutorial.title}</h2>
          {tutorial.contents.map((content)=>{
            var value;
            switch (content.type) {
              case "text":
                value = <p className="content">{content.value}</p>;
                break;
              case "code":
                value = <PythonEditor title={tutorial.title} defaultCode={content.value.join("\n")} />;
                break;
              case "list":
                value = <ul>{content.value.map(v=><li>{v}</li>)}</ul>;
                break;
              case "table":
                value = <table style={{borderCollapse:"collapse", margin:"3em auto", backgroundColor:"#fff"}}>
                  {content.value.map(row=><tr style={{border:"1px solid #000"}}>
                    {row.map(record => <td style={{border:"1px solid #000", padding:".5em 1em", textAlign:"center"}}>{record}</td>)}
                  </tr>)}
                </table>
                break;
              default:
                value = <></>;
                break;
            }
            return value;
          })}
      </div>
    )})}
  </div>)
}
