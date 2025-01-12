import { OptionComponentProps } from "@/global/type";
import { useEffect,useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
const Option:React.FC<OptionComponentProps> = ({index,optionKey,value,currentQuestionIndex,selectedOption,correctOptions,optionOnSelected}) =>{
    const [change,setChange] = useState<boolean>(false);
       useEffect(()=>{ 
            console.log({
                selectedOption,correctOptions,value
            });
           setChange(true);
           setTimeout(()=>{
               setChange(false);
           },400)
       },[value]);
    return (
        <label key={index} className={`${change ? 'opacity-0' : 'opacity-1' } flex border rounded-md px-3 shadow-sm py-5 cursor-pointer items-center transition-all duration-300    ${
                selectedOption==null? 'hover:scale-102 hover:border-gray-300 hover:bg-gray-200 bg-gray-100': selectedOption == value ? selectedOption == correctOptions ? 'bg-emerald-200 border-emerald-300 ring ring-emerald-200' : 'bg-red-200 border-red-300 ring ring-red-200'  : value == correctOptions ? 'bg-emerald-200 border-emerald-300 ring ring-emerald-200 ' : 'bg-gray-100'
                }`}>
            <input type="radio" name={`q-${currentQuestionIndex}`} value={value} className="w-0 h-0 opacity-0" onChange={(event)=>{
                optionOnSelected(parseInt(event.target.value));
            }} disabled={selectedOption || change?true:false} checked={selectedOption==value}/>
            <div className={`border uppercase w-8 h-8 flex items-center justify-center rounded-lg font-circular  ${
                selectedOption==null? 'bg-white':selectedOption == value ? selectedOption == correctOptions ? 'text-white bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-900/10': 'text-white bg-red-400 border-red-300 shadow-lg shadow-red-900/10 text-white' : value == correctOptions ?'text-white bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-900/10':'bg-white'
            }`}>
                {selectedOption == value ? selectedOption == correctOptions ? <FaCheck size={20}/> : <FaXmark size={20}/> : optionKey}
            </div>
            <div className="font-circular ml-5">{value}</div>


        </label> 
    )
}

export default Option;