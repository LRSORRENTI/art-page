

export function CurrentExhibition(){
    return ( 
    <div className="container max-w-[1200px] w-[80%] m-auto py-[10px] transition ease-in mt-10 sm:mt-0 sm:absolute  sm:left-32 sm:top-48 xl:ml-5">
        <h2 className="mb-[2rem] font-extralight text-md sm:text-2xl text-center">
            current exhibition - night ambience
        </h2>
        <div className="photo-gallery flex-col lg:flex-row flex gap-[20px] ">
            <div className="column flex flex-col gap-[20px] ">
                <div className="photo rounded-md">
                    <img src="/Night/night1.jpg" alt="" className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night2.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night3.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover"/>
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo rounded-md">
                    <img src="/Night/night4.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night5.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night6.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo rounded-md">
                    <img src="/Night/night7.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night8.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night9.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night10.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night11.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Night/night12.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                </div>
        </div>
    </div>
    )
}