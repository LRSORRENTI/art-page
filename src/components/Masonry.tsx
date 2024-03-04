

export function Masonry(){
    return ( 
    <div className="container max-w-[1200px] w-[80%] m-auto py-[10px]  absolute left-32 top-48">
        <h2 className="mb-[2rem] font-extralight text-2xl">
            current exhibition - liminal spaces
        </h2>
        <div className="photo-gallery flex-col md:flex-row flex gap-[20px] ">
            <div className="column flex flex-col gap-[20px] ">
                <div className="photo">
                    <img src="/Liminal/liminal1.jpg" alt="" className="w-[100%] h-[100%] rounded-md object-cover" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal2.jpg" alt="" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal3.jpg" alt="" />
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo">
                    <img src="/Liminal/liminal4.jpg" alt="" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal5.jpg" alt="" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal1.jpg" alt="" />
                </div>
                </div>
            <div className="column flex flex-col gap-[20px]">
                <div className="photo">
                    <img src="/Liminal/liminal2.jpg" alt="" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal3.jpg" alt="" />
                </div>
                <div className="photo">
                    <img src="/Liminal/liminal4.jpg" alt="" />
                </div>
                </div>
        </div>
    </div>
    )
}