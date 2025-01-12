import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ExitDialogProps } from "@/global/type";
import { Door01Icon } from "hugeicons-react";
const ExitDialog:React.FC<ExitDialogProps> = ({returnToHome}) => {
  
    return (
        <AlertDialog>
        <AlertDialogTrigger className="flex bg-red-600 text-white rounded-md font-circular items-center px-4 py-2 sm:py-3 gap-2 text-sm w-fit absolute flex top-2 right-2 hover:bg-red-500 focus:ring focus:ring-red-300"><Door01Icon size={16}/><span className="relative" style={{'top':'1px'}}>Exit Quiz</span></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are You Sure Want to Exit the Quiz?</AlertDialogTitle>
            <AlertDialogDescription>
            Are you sure you want to exit the quiz? All your progress will be lost, and you won't be able to resume from where you left off.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{
             returnToHome();
            }}>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    )
}

export default ExitDialog;