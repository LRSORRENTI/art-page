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
  import { InputField } from "./InputField";

  export function ContactDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-extralight">contact lumina gallery</AlertDialogTitle>
            <AlertDialogDescription className="font-extralight">
            enter your name, email, and a message and we'll get back to you
            </AlertDialogDescription>
            <InputField/>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-extralight" onClick={onClose}>cancel</AlertDialogCancel>
            <AlertDialogAction className="font-extralight bg-slate-400">submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  