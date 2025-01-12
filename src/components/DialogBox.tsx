import { DialogBoxProp } from "@/global/type";
import "@/css/quiz.css";
import useIdentifyChange from "@/hook/useIdentifyChange";
const DialogBox:React.FC<DialogBoxProp> = ({question}) => {
    const change:boolean = useIdentifyChange(question);
    return  (
    <div className="flex-1 flex px-4 py-5 relative flex  bg-neutral-200 rounded-md text-gray-700" id="dialogBox">
        <code className={` ${change? 'opacity-0':'opacity-1'}`}>{question}</code>
    </div>
  )
}

export default DialogBox;