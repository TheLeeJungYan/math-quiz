import { quiz } from "@/json/quiz.json";
import { useState } from "react";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Robot from "@/components/Robot";
import Option from "@/components/Option";
import { Button } from "@/components/ui/button";
import { Door01Icon } from "hugeicons-react";
import { QuestionProps } from "@/global/type";
import "@/css/quiz.css";
const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>(quiz);
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
  const [score,setScore] = useState(0);

  const [currentQuestion,setCurrentQuestion] = useState<QuestionProps>(quiz[currentQuestionIndex]);
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
            <Robot error={false}/>
            <div className="flex-1 px-4 py-5 relative flex  bg-neutral-200 rounded-md text-gray-700" id="dialogBox">
              {currentQuestion.question ? <code>{currentQuestion.question} rounded off to the nearest <b>10</b> is .. ?</code>:''}
            </div>
          </div>
          <div id="optionsGrp" className="mt-10 flex flex-col w-full gap-5">
              {
                currentQuestion.options && Object.entries(currentQuestion.options).map(([key, value], index) => {
                  return <Option key={index} index={index} optionKey={key} value={value} currentQuestionIndex={currentQuestionIndex}/>
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
