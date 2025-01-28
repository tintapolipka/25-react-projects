import { useRef } from "react";
import useFetch from "../use-fetch/index.jsx"

export default function ScrollToTopAndBottom(){
    const bottomRef = useRef();
    
    const {data, pending, error } = useFetch(
        "https://dummyjson.com/products/",{}
    );

    function handleScrollToTop(){
       window.scrollTo({top:0, left: 0, behavior:"smooth"})
    }

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }

    if(pending){return <h1>Loading data! Please wait...</h1>}

    if(error){return <h1>Error occured! Please try again.</h1>}

    return <div>
        <h1>Scroll To Top And Bottom</h1>
        <h3>This is the top section</h3>
        <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
        <ul style={{listStyle: 'none'}}>
            {data && data.products && data.products.length?
            data.products.map((product,index) =>
                <li key={index}>{product.title}</li>
             )
        :null}
        </ul>
        <div ref={bottomRef}></div>
        <h3>This is the bottom section</h3>
        <button onClick={handleScrollToTop}>Scroll to Top</button>
            
    </div>
}