import { DialogBoxProp } from "@/global/type";
import { useEffect,useState } from "react";
import "@/css/quiz.css";
const DialogBox:React.FC<DialogBoxProp> = ({question}) => {
    const [change,setChange] = useState<boolean>(false);
    useEffect(()=>{ 
        setChange(true);
        setTimeout(()=>{
            setChange(false);
        },400)
    },[question]);
    return  (
    <div className="flex-1 flex px-4 py-5 relative flex  bg-neutral-200 rounded-md text-gray-700" id="dialogBox">
        <code className={`transition-all duration-200 ${change?'opacity-0':'opacity-1'}`}>{question}</code>
    </div>
  )
}

export default DialogBox;