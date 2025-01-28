import { useState } from "react";
import FinalLevel from "./FinalLevel"

export default function MidLevel({self,children,deepness,key}){
    const [isOpen,setIsOpen] = useState(false);

    function handleOnReveal(){
        setIsOpen(!isOpen);
    }

   const childList = children.map((item,index)=>{
    if(item.children){
        return <MidLevel self={item} key={index} children={item.children} deepness={deepness+1}/>
    } else {
        return <FinalLevel self={item} key={index} deepness={deepness+1}/>
    }
   })

    return (
        <div className="child"  key={key}>
            <button onClick={handleOnReveal}>+</button>
             {deepness}.   Mid-level: {self.label}
                {isOpen? childList : null}
        </div>
    )
}