import { ProgressBarProps } from "@/global/type";

const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex,maxNumber }) => {
  const percentage:number = ((currentIndex + 1) / maxNumber) * 100;
  return (
    <>
      <div className="min-w-4xl rounded-full bg-zinc-100 border border-zinc-50 h-3  overflow-hidden relative">
        <div
          className="bg-emerald-500 absolute top-0 left-0 h-full transition-all duration-1000 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="mt-3 font-circular text-gray-400">
        Questions <span className="text-emerald-500 font-bold">{currentIndex+1}</span> / {maxNumber}
      </div>
    </>
  );
};

export default ProgressBar;
