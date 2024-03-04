import * as React from "react"
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
  
export function NavDrawer({ setCurrentSelection}: any) {
  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
 
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="border border-slate-200 hover:bg-inherit hover:cursor-pointer hover:bg-slate-100 w-8 sm:w-12 ml-2 lg:hidden absolute top-4 pb-1 ">
        <p>
  <svg
    width="45"
    height="65"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 13.5C6 13.1193 6.11929 12 7.5 12H37.5C38.8807 12 39 13.1193 39 13.5C39 13.8807 38.8807 15 37.5 15H7.5C6.11929 15 6 13.8807 6 13.5ZM21 22.5C21 22.1193 21.1193 21 22.5 21H37.5C38.8807 21 39 22.1193 39 22.5C39 22.8807 38.8807 24 37.5 24H22.5C21.1193 24 21 22.8807 21 22.5ZM12 31.5C12 31.1193 12.1193 30 13.5 30H37.5C38.8807 30 39 31.1193 39 31.5C39 31.8807 38.8807 33 37.5 33H13.5C12.1193 33 12 31.8807 12 31.5Z"
      fill="lightgrey"
    ></path>
  </svg>
</p>


        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {/* <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader> */}
          <div className="p-4 pb-0">
            <div className="flex items-center justify-end space-x-2">
            <DrawerClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
              <p className="font-extralight hover:font-thin">X</p>
              </Button>
              </DrawerClose>
            </div>
            <div className="mt-3 h-[120px]">
            </div>
          </div>
        <DrawerFooter>
        <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('about')}>about</p>
        <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('current')}>current</p>
        <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('coming')}>coming soon</p>
        <p className="mx-auto text-3xl font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('contact')}>contact</p>
      </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}