import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight02Icon } from "hugeicons-react";
import { NavigateFunction, useNavigate } from "react-router";
const HomePage = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <Header />
      <div className="flex-1 flex justify-center py-32">
        <div className="flex flex-col gap-6 max-w-4xl  text-center">
          <div className="text-3xl sm:text-6xl font-circular text-gray-800">
            MATH MASTERY CHALLENGE
          </div>
          <div className="font-montserratRegular">
            Test your math skills with 12 multiple-choice questions focused on
            rounding numbers to the nearest 10. See how quickly you can solve
            each problem and master the concept of rounding!
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-gray-800 flex gap-2 items-center hover:bg-gray-600"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              <span>Start Challenge</span>
              <ArrowRight02Icon size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
