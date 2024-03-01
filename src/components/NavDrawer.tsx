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
 

 
export function NavDrawer() {
  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
 
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
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
            <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer">about</p>
            <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer ">gallery</p>
            <p className="mx-auto text-3xl font-thin hover:font-extralight hover:cursor-pointer ">contact</p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}