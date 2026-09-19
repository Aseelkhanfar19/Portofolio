import type {ReactNode } from "react";



interface compProps{
    children:ReactNode
};


function IntroBox({children}:compProps){
    return (
    <>
    <div className="fixed w-full bg-blue-700 inset-0 h-3/5 py-6">
        {children}
    </div>
    </>)

}

export default IntroBox;