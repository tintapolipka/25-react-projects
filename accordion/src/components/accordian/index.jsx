import { useState } from "react"
import data from './data.js'
import QandA from "./QAndA.jsx";

export default function Accordian(){
       // Single selection
    function onClickHandler(index){
        if(selected.length && selected[0] === index){setSelected([])} else {setSelected([index])};
    }

const [selected,setSelected] = useState([2,]);

// Multipile selection

function onSelectAll(){
    if(selected.length === data.length){
        setSelected([]);
    } else
    {setSelected(data.map((d,index)=>index))}
}

const selectedAccordians = data.map((qAndA,index)=>{
    const isVisible = selected.includes(index);

    return (<div key={qAndA.id}>
        <h2 onClick={()=>onClickHandler(index)}>{qAndA.question}</h2>
        <QandA answer={qAndA.answer} isVisible={isVisible}/>
    </div>)
})

    return(<div>
        <h1 onClick={()=>onSelectAll()}>Accordian</h1>
        {selectedAccordians}
    </div>)
}