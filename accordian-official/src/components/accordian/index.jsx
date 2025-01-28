import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
  // Single selection

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleselection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Multipile selection
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
    console.log("multiple: ", multiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleselection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
              ? multiple.indexOf(dataItem.id) !== -1 &&
              (
                <div className="content">{dataItem.answer}</div>
              ) :
              selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found.</div>
        )}
      </div>
    </div>
  );
}
