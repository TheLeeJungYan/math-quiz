import { OptionComponentProps } from "@/global/type";
const Option:React.FC<OptionComponentProps> = ({index,optionKey,value,currentQuestionIndex}) =>{
    return (
        <label key={index} className="flex border bg-gray-100 rounded-md px-3 py-3 hover:bg-gray-200 cursor-pointer items-center">
            <input type="radio" name={`q-${currentQuestionIndex}`} value={value} className="w-0 h-0 opacity-0"/>
            <div className="border uppercase w-8 h-8 flex items-center justify-center rounded-lg bg-white font-circular text-gray-700">{optionKey}</div>
            <div className="font-circular ml-5">{value}</div>
        </label> 
    )
}

export default Option;