import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data.js'

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});
  
  async function fetchFeatureFlags(){
    try{
      setLoading(true);
      // original service call
      const response = await featureFlagsDataServiceCall();
      setEnableFlags(response);

      setLoading(false);
    } catch(error){
      console.log(error)
      setLoading(false);
      throw new Error(error);
    }
  }
  
  useEffect(()=>{
    fetchFeatureFlags();
    console.warn(enableFlags);
  },[])
  
  return (
    <FeatureFlagsContext.Provider value={{loading, enableFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
