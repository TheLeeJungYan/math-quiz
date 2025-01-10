import { quiz } from "@/json/quiz.json";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";
import Robot from "@/components/Robot";
const Quiz = () => {
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  return (
    <div className="flex flex-1 flex-col">
      <div className="py-14 flex-1 flex flex-col items-center">
        <div className="flex flex-col max-w-4xl items-center ">
          <ProgressBar percentage={progressPercentage} />
          <div
            id="question"
            className="flex w-full mt-10 min-h-28 items-center gap-10"
          >
            <Robot />
            <div className="flex-1 px-4 py-5 relative flex border bg-gray-100 border-gray-200 rounded-md">
              <code>adad dadad dadad dadad </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
