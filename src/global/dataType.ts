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