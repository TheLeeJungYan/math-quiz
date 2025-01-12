import { quiz } from "@/json/quiz.json";
import { useState,useEffect } from "react";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Robot from "@/components/Robot";
import Option from "@/components/Option";
import { Button } from "@/components/ui/button";
import DialogBox from "@/components/DialogBox";
import { Door01Icon } from "hugeicons-react";
import { QuestionProps } from "@/global/type";


const Quiz = () => {
  const questions:QuestionProps[] = quiz;
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
  const [score,setScore] = useState(0);
  console.log(score);
  const [robotStatus,setRobotStatus] = useState<"normal" | "correct" | "wrong">("normal");
  const [currentQuestion,setCurrentQuestion] = useState<QuestionProps>(quiz[currentQuestionIndex]);
  const [selectedOption,setSelectedOption] = useState<number|null>(null);
  const optionOnSelected:(value:number)=>void = (value) =>{
    setSelectedOption(value);
    if(value == currentQuestion.answer){
      setScore((prev)=>prev+1);
      setRobotStatus("correct");
    }else{
      setRobotStatus("wrong");
    }
    setTimeout(()=>{
      setRobotStatus("normal");
      setCurrentQuestionIndex((prev)=>prev+1);
    },1000);
  } 

  useEffect(()=>{
    setCurrentQuestion(quiz[currentQuestionIndex]);
    setSelectedOption(null);
  },[currentQuestionIndex])
  return (
    <div className="flex flex-1 flex-col">
      <Button className="flex bg-red-600 w-fit absolute flex top-2 right-2 hover:bg-red-500 focus:ring focus:ring-red-300"><Door01Icon size={24}/>Exit Quiz</Button>
      <div className="py-14 flex-1 flex flex-col items-center">
        <div className="flex flex-col max-w-4xl items-center ">
          <ProgressBar currentIndex={currentQuestionIndex} maxNumber={questions.length} />
          <div
            id="question"
            className="flex w-full mt-10 min-h-28 items-center gap-10"
          >
            <Robot robotStatus={robotStatus} />
            <DialogBox question={`${currentQuestion.question} rounded off to the nearest 10 is ..?`}/>
        
           
          </div>
          <div id="optionsGrp" className="mt-10 flex flex-col w-full gap-5">
              {
                currentQuestion.options && Object.entries(currentQuestion.options).map(([key, value], index) => {
                  return <Option key={index} index={index} optionKey={key} value={value} currentQuestionIndex={currentQuestionIndex} optionOnSelected={optionOnSelected} selectedOption={selectedOption} correctOptions={currentQuestion.answer}/>
                })
              }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
