import { quiz } from "@/json/quiz.json";
import { useState,useEffect } from "react";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Robot from "@/components/Robot";
import Option from "@/components/Option";
import DialogBox from "@/components/DialogBox";
import ExitDialog from "@/components/ExitDialog";
import RegisterDialog from "@/components/RegisterDialog";
import ScoreDialog from "@/components/ScoreDialog";
import { QuestionProps } from "@/global/dataType"
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from "react-router";

const Quiz = () => {
  const navigate = useNavigate();
  const questions:QuestionProps[] = quiz;
  const maxQuestionIndex:number = quiz.length - 1;
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
  const [score,setScore] = useState(0);
  const [robotStatus,setRobotStatus] = useState<"normal" | "correct" | "wrong">("normal");
  const [currentQuestion,setCurrentQuestion] = useState<QuestionProps>(quiz[currentQuestionIndex]);
  const [selectedOption,setSelectedOption] = useState<number|null>(null);
  const [registerDialogOpen,setRegisterDialogOpen] = useState<boolean>(false);
  const [scoreDialogOpen,setScoreDialogOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(() => {
    const storedValue = secureLocalStorage.getItem("name");
    return typeof storedValue === "string" ? storedValue : null;
  });
  const [nameError,setNameError] = useState<boolean>(false);

  const openScoreDialog = () => {
    setRegisterDialogOpen(false);
    setScoreDialogOpen(true);
  }
  const optionOnSelected:(value:number)=>void = (value) =>{
    setSelectedOption(value);
    if(value == currentQuestion.answer){
      setScore((prev)=>prev+1);
      setRobotStatus("correct");
    }else{
      setRobotStatus("wrong");
    }

    if(maxQuestionIndex <= currentQuestionIndex){
      console.log(score);
      console.log(name);
      if(name === null){
        setTimeout(()=>{
          setRegisterDialogOpen(true);
        },300);
      }else{
        openScoreDialog();
      }
      return;
    }

    setTimeout(()=>{
      setRobotStatus("normal");
      setCurrentQuestionIndex((prev)=>prev+1);
    },1000);

  } 

  const returnToHome:()=>void = () => { 
    navigate('/');
  }

  const submitName:() => void = () => {
    if(name === null || name.trim() === ""){
      setNameError(true);
      return;
    }

    secureLocalStorage.setItem("name",name);
    openScoreDialog();
  }

  useEffect(()=>{
    setCurrentQuestion(quiz[currentQuestionIndex]);
    setSelectedOption(null);
  },[currentQuestionIndex])
  return (
    <div className="flex flex-1 flex-col">
     
      
      <ScoreDialog open={scoreDialogOpen} score={score} totalQuestion={maxQuestionIndex+1} name={name} returnToHome={returnToHome}/>
      <ExitDialog returnToHome={returnToHome}/>
      <RegisterDialog open={registerDialogOpen} name={name} nameError={nameError} setName={setName} submitName={submitName} setNameError={setNameError}/>
      <div className="py-14 flex-1 flex flex-col items-center">
        <div className="flex flex-col md:max-w-4xl w-full  px-10 items-center ">
          <ProgressBar currentIndex={currentQuestionIndex} maxNumber={questions.length} />
          <div
            id="question"
            className="flex w-full mt-10 min-h-28 items-center gap-10"
          >
            <Robot robotStatus={robotStatus} />
            <DialogBox question={currentQuestion.question}/>
        
           
          </div>
          <div id="optionsGrp" className="w-full flex flex-col gap-5 mt-5">
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
