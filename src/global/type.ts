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
  question: number; 
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

export interface robotProps {
  robotStatus: "normal" | "correct" | "wrong"
}