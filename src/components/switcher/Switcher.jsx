import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode/dist";
import useDarkSide from "../../hook/useDarkSide";



function Switcher(){
    const [colorTheme, setTheme] = useDarkSide();
    const[darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <>
        
        <div className=" relative top-[20px]">
            <DarkModeSwitch 
                checked = {darkSide}
                onChange = {toggleDarkMode}
                size = {30}
            />
            <h3 className="text-gray-800 dark:text-gray-300 pt-4">{colorTheme === 'light'}</h3>
        </div>
        </>
    )
}
export  default Switcher