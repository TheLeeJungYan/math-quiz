import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"
import styled from "styled-components";
import ReactConfetti from "react-confetti";
import { ScoreDialogProps } from "@/global/type";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
const ScoreDiv = styled.div<{ $result: number }>`
    padding:20px;
    background:${props=>props.$result <= 40 ? 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)' : props.$result >= 80 ? 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)' : 'linear-gradient(120deg, #f6d365 0%, #fda085 100%);'}
`;
const ScoreDialog:React.FC<ScoreDialogProps> = ({open,name,score,totalQuestion,returnToHome}) => {
    const [result,setResult] = useState<number>(0);
    useEffect(()=>{
        if(score && open){
            const scoreInHundredBasis = (score / totalQuestion) * 100;
            const roundedScore = Math.round(scoreInHundredBasis);
            console.log(roundedScore);
            setResult(roundedScore);
        }
    },[score,totalQuestion,open]);
    
    return (
     <Dialog open={open}>
      <DialogContent className="sm:max-w-[400px] font-circular [&>button]:hidden overflow-hidden">
        <DialogHeader>
            <div className="text-sm bg-slate-200 rounded-md px-2 py-1 w-fit text-gray-800">{name}</div>
          <DialogTitle>Total Correct Answers</DialogTitle>
          <DialogDescription className="text-xs text-gray-500 font-montserratRegular">
            <span className="text-gray-800"><span className={`${result<=40?'text-red-500':result>=80?'text-emerald-500':'text-orange-500'} font-montserratBold`}>{score}</span> out of <b className="font-montserratBold">{totalQuestion}</b> answers</span>
          </DialogDescription>
        </DialogHeader>
        <ReactConfetti width={400} height={1000} className=""/>
       <div className="flex flex-col">
    
        
        <div className="flex flex-1 items-center justify-center py-2">
            <div className="rounded-lg w-full h-full bg-gray-100 flex flex-col items-center justify-center py-5 gap-2 ">
                <span className="text-gray-600">Final Score is </span>
                <ScoreDiv $result={result} className={`${result<=40 ? 'shadow-red-300' : result>=80 ? 'shadow-green-300' : 'shadow-orange-300' } shadow-lg rounded-full text-5xl text-white  z-100 w-[100px] h-[100px] flex items-center justify-center`}>
                    {result}
                </ScoreDiv>
            </div>
        </div>
        <div className="flex mt-3 gap-2 justify-end">
            <Button className="bg-slate-100 border text-gray-500 hover:bg-slate-200" onClick={()=>{
                returnToHome();
            }}>Return To Home</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600" onClick={()=>{
                window.location.reload();
            }}>Try Again</Button>
        </div>
       </div>
      </DialogContent>
    </Dialog>

    )
}

export default ScoreDialog;