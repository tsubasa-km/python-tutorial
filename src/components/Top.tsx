import { PythonEditor } from "./PythonEditor/PythonEditor";
import { tutorials } from "../tutorials";

export function Top() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      {tutorials.map((tutorial, idx) => (
        <div style={{ padding: "0 2em" }} key={idx}>
          <h2 className="title" style={{ textAlign: "center" }}>
            {tutorial.title}
          </h2>
          {tutorial.contents.map((content) => {
            var value;
            switch (content.type) {
              case "text":
                value = <p className="content">{content.value}</p>;
                break;
              case "code":
                value = (
                  <PythonEditor
                    title={tutorial.title}
                    defaultCode={content.value.join("\n")}
                  />
                );
                break;
              case "list":
                value = (
                  <ul>
                    {content.value.map((v) => (
                      <li>{v}</li>
                    ))}
                  </ul>
                );
                break;
              case "table":
                value = (
                  <table
                    style={{
                      borderCollapse: "collapse",
                      margin: "3em auto",
                      backgroundColor: "#fff",
                    }}
                  >
                    {content.value.map((row, rowIdx) => (
                      <tbody key={rowIdx}>
                        <tr style={{ border: "1px solid #000" }}>
                          {row.map((record, recIdx) => (
                            <td
                              style={{
                                border: "1px solid #000",
                                padding: ".5em 1em",
                                textAlign: "center",
                              }}
                              key={recIdx}
                            >
                              {record}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                );
                break;
              default:
                value = <></>;
                break;
            }
            return value;
          })}
        </div>
      ))}
    </div>
  );
}
