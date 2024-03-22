import * as React from "react"

import { Button, MotionButton } from "@/components/ui/button"
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
import MenuIcon from "./icons/menu"

export function MenuDraw() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MotionButton variant={'icon'}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <MenuIcon/>
        </MotionButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <div className="mt-3 h-[40%]">
              123
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
