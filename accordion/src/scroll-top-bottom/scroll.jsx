import { useRef } from "react";

export default function ScrollToTop(){
    const bottomRef = useRef();
    const topRef = useRef();

    const list = [];
    for (let i = 0; i< 40 ;i++){
        list.push(<li key={i}>{i}</li>)
    }

function handleScrollTo(ref){
    ref.current.scrollIntoView({behavior: "smooth"})
}

    return <div>
        <h1>Top</h1>
        <button ref={topRef} onClick={()=>handleScrollTo(bottomRef)}>scroll to bottom</button>
        <ul>{list}</ul>
        <button ref={bottomRef} onClick={()=>handleScrollTo(topRef)} >scroll to top</button>
        <h1>Bottom</h1>
    </div>
}