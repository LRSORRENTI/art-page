import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
export function InputField() {
  return (
  <>
  <Input type="text" placeholder="name" className="font-extralight" />
  <Input type="email" placeholder="email" className="font-extralight" />
  <Textarea placeholder="enter your message here" className="font-extralight"/>
  </>
  )
}
