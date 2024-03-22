"use client"

import { useThemeStore } from "@/store/theme";
import { Button, MotionButton } from "./ui/button";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";

const ModeToggle:React.FC = () => {
    const {mode, set} = useThemeStore();
    const isDarkMode = mode === 'dark'
    //TODO: Component shouldn't need to check current state. Store should handle this.
    
    return (
        <MotionButton onClick={() => set(isDarkMode ? 'light' : 'dark')} variant={'icon'}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </MotionButton>
    )
}

export default ModeToggle;