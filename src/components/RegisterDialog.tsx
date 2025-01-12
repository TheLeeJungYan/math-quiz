import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RegisterDialogProps } from "@/global/type"
const RegisterDialog:React.FC<RegisterDialogProps> = ({open,name,nameError,setName,setNameError,submitName}) => {
    return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px] font-circular [&>button]:hidden">
        <DialogHeader>
          <DialogTitle >Enter Your Name to Continue</DialogTitle>
          <DialogDescription className="font-montserratRegular text-xs">
            Please provide your name to save your score and view the results.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="text-sm text-gray-500">
              Name
            </Label>
            <Input
                id="name"
                value={name ?? ''}
                className="w-full text-gray-800"
                onInput={(event: React.FormEvent<HTMLInputElement>) => {
                    const inputValue = (event.target as HTMLInputElement).value;
                    setName(inputValue);
                    if(inputValue.trim() !== ""){
                        setNameError(false);
                    }   
                    
                }}
            />
            <div className={`${nameError?'flex':'hidden'} font-sans text-red-500 text-xs font-circular`}>* Please enter your name before proceeding.</div>
          </div>
          
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={(event)=>{
                event.preventDefault();
                submitName();
            }}
            >
            Submit
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}

export default RegisterDialog;