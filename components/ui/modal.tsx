"use client"

{
    /*
       Dekho jo dialog shadcn hame provide karta hai bo bilkul bana banaya nhi hota
       shadcn hame flexibility deta hai ki ham apne dialog me kya rkhna chahte hain
       aur kya hatana chahte hain DialogHeader rakhna chahte hain DialogTitle rkhna 
       chahte hain ya baki chije rkhna chahte hain jo v rkhna chate hain usko import 
       karke use karlo uska component to bahi kam hamlog modal.tsx me kar rhe hain
       jo v dialog ka hissa hame apne dialog me chahiye usko import kar rhe hain 
       aur use kar rhe hain.
    */
} 

import { Dialog, 
         DialogContent, 
         DialogDescription,
         DialogHeader,
         DialogTitle 
       } from "./dialog";


{
    /*
       as usual niche me hamne type asserion kar diya hai
    */
}
interface ModalProps {
    title:string;
    description:string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

{
    /*
       niche me hamne component bana ke export kar diya hai
    */
}
export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
})=>{
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };
    
    return(
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>{children}
                </DialogHeader>
                
            </DialogContent>
        </Dialog>
    )
}