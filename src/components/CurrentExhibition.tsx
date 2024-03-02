import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export function CurrentExhibition(){
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
            <Image width={500} height={500} src="/imgs/night.jpg" alt="Image" className="rounded-md object-cover" />
            </AspectRatio>
        </div>
    )
}