import { useEffect, useState } from "react";
import data from "./data.js";
import './styles.css';
import MidLevel from "./MidLevel.jsx";
import FinalLevel from "./FinalLevel.jsx";

export default function TreeView() {
console.log(data) 

  const children = data.map(data=>
        {
          const deepness = 0;

      return (<div className="child" key={data.label}>
        {/* <h3>{deepness}. {data.label}</h3> */}
        {data.children? <MidLevel self={data} children={data.children} deepness={deepness}/>:
        <FinalLevel self={data} deepness={deepness}/> }
    </div>)
    })
  
  return <div>
    {children}
  </div>;
}
