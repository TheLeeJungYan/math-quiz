import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ProgressBarProps {
  currentIndex: number;
  maxNumber:number
}

export interface OptionProps {
  a: number;
  b: number;
  c: number;
}

export interface QuestionProps {
  id: number;
  question: string; 
  options: OptionProps;  
  answer: number;  
}

export interface OptionComponentProps {
  optionKey:string;
  value:number;
  index:number;
  currentQuestionIndex:number;
  selectedOption:number|null;
  correctOptions:number;
  optionOnSelected:(value:number)=>void,
}

export interface DialogBoxProp{
  question:string
}

export interface RobotProps {
  robotStatus: "normal" | "correct" | "wrong";
}

export interface RegisterDialogProps {
  open:boolean;
  name: string | null ;
  nameError:boolean;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  submitName:() => void
  setNameError: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ExitDialogProps { 
  returnToHome:()=>void
}
export interface ScoreDialogProps{
  open:boolean;
  score:number;
  totalQuestion:number;
  name:string|null;
  returnToHome:()=>void
}