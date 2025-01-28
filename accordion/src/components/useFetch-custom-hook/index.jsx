import useFetch from "../../custom-hooks/useFetch";

export default function TryUseFetch({ getUrl }) {
    const [isLoading,loadedData,error] = useFetch(getUrl)

    const data = JSON.stringify(loadedData)
        
  
    if(isLoading){
        return <div>
            <h2>Loadig data, please wait...</h2>
        </div>
    }
    
    return (
    <div>
      <h3>Fetched Data:</h3>
      <p>{error? error : data}</p>
    </div>
  );
}
