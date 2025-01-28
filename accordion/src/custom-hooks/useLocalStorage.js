import {useState, useEffect} from 'react';

export default function useThemeChange(){
    const [isActive,setIsActive]= useState(false);

    useEffect(()=>{
        setProperty("--light-dark-background", '#ff7a7a','#ced12b');
        setProperty("--light-dark-inverse", '#ff7a7a','#ced12b');
        setProperty('--light-dark-color','#1c331f','white')
        setIsActive(!isActive);
    },[isActive]);

    function setProperty(param,value1,value2){
        const valueToUse = isActive? value2 : value1;
        if(localStorage[param]){
        localStorage[param] = JSON.stringify(valueToUse)
    } else {localStorage.setItem(param,valueToUse)}
    }
    function setThemeProperty(){
        document.documentElement.style.setProperty('--light-dark-background', localStorage['--light-dark-background']);
        document.documentElement.style.setProperty('--light-dark-inverse', localStorage['--light-dark-inverse']);
        document.documentElement.style.setProperty('--light-dark-color', localStorage['--light-dark-color']);
    }
}