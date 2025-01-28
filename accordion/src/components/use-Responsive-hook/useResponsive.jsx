import { useEffect, useState } from "react";

export default function useResponsive(){

    const [dimensions,setDimensions] = useState({x:window.innerWidth,y:window.innerHeight});

    useEffect(()=>{
        function saveDimensions(){
            const x = window.innerWidth;
            const y = window.innerHeight;
            
            setDimensions({x: x, y:y});
        }


       window.addEventListener('resize',saveDimensions);
        

        return ()=>{window.removeEventListener('resize',saveDimensions)} 
    },[setDimensions])
    
    return dimensions;
}