export function HeroContainer(){
    return (
        <div className=" w-20 justify-between border border-red-500">
            
            <h2>Art Gallery</h2>
            <p>current exhibition</p>
            <p>coming soon</p>
            <div className=" pt-52 pb-52  border-t-transparent border-r-transparent border-b-transparent hidden lg:block" style={{ position: 'absolute', top: '40%', left:'88%', transform: 'translateY(-50%)', transition: ".2s ease" }}>
            <p className=" mx-auto text-3xl mb-7 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}}>about</p>
            <p className="mx-auto text-3xl mb-7 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}}>gallery</p>
            <p className="mx-auto text-3xl font-thin hover:font-extralight hover:cursor-pointer " style={{transition: ".2s ease-in"}}>contact</p>
            </div>
        </div>
    )
}