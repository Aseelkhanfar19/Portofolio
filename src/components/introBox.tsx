import type {ReactNode } from "react";



interface compProps{
    children:ReactNode
};


function IntroBox({children}:compProps){
    return (
    <>
    <div className="fixed w-full bg-blue-300 h-1/4 -inset-0">
    {children}

    </div>
    </>)

}

export default IntroBox;