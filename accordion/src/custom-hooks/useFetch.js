import { useEffect, useState } from "react";

export default function useFetch(getUrl){
    const [isLoading, setIsLoading] = useState(false);
    const [loadedData, setLoadedData] = useState(null);
    const [error, setError] = useState('');

   async function fetchUrl (getUrl,options={}){
        try{
            setIsLoading(true);
            const response = await fetch(getUrl,{...options});
	    if(!response.ok){throw new Error(response.statusText)}
	                
	    const data = await response.json();
            setLoadedData(data);
	    setError(null);	
            setIsLoading(false);
        } catch(error){
            console.log(error);
            setError(error.message)
            setIsLoading(false);
            
        }
        
        console.log(loadedData)
    } 

    useEffect(
        ()=>{fetchUrl(getUrl)},[getUrl]
    )

    return [isLoading,loadedData,error];
}