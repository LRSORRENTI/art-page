import Image from "next/image"

export function ComingSoon(){
    return ( 
    <div className="container max-w-[1200px] w-[80%] m-auto py-[10px] transition ease-in mt-10 sm:mt-0 sm:absolute  sm:left-32 sm:top-48 xl:ml-5">
        <h2 className="mb-[2rem] font-extralight text-md sm:text-2xl text-center">
            coming soon - liminal spaces
        </h2>
        <div className="photo-gallery flex-col lg:flex-row flex gap-[20px] ">
            <div className="column flex flex-col gap-[20px] ">
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal1.jpg" alt="" className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal2.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal3.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover"/>
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal4.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal5.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal6.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal7.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal8.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo rounded-md">
                    <img src="/Liminal/liminal9.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                </div>
        </div>
    </div>
    )
}