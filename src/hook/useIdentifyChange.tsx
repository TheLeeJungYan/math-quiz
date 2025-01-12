import { useState,useEffect } from "react";
const useIdentifyChange:(value:string|number) =>boolean = (value) => {
    const [change,setChange] = useState<boolean>(true);
   
    useEffect(()=>{ 
        setChange(true);
        setTimeout(()=>{
            setChange(false);
        },200)
    },[value]);
    return change;
}

export default useIdentifyChange;


