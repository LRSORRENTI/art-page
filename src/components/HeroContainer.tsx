import { ContactDialog } from "./ContactDialog"

import { useState } from 'react'

export function HeroContainer({ setCurrentSelection }: any){
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return (
        <div className="hidden sm:block w-20 justify-between">
            <div className="mt-[150%] ml-2">
                <p className="mx-auto text-3xl mb-10 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('current')}>current exhibition</p>
                <p className="mx-auto text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setCurrentSelection('coming')}>coming soon</p>
            </div>
            <div className=" pt-52 pb-52  border-t-transparent border-r-transparent border-b-transparent hidden lg:block" style={{ position: 'absolute', top: '40%', left:'90%', transform: 'translateY(-50%)', transition: ".2s ease" }}>
            <p className=" mx-auto text-3xl mb-7 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}}onClick={() => setCurrentSelection('about')} >about</p>
            <p className="mx-auto text-3xl mb-7 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}}>gallery</p>
            <p className="mx-auto text-3xl font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}} onClick={() => setIsDialogOpen(true)}>contact</p>
        </div>
        {isDialogOpen && <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />}

    </div>
    )
    
}