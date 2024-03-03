import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export function CurrentExhibition(){
    return (
        // <div className="w-[450px]">
        //     <AspectRatio ratio={16 / 9}>
        //     <Image width={500} height={500} src="/imgs/night.jpg" alt="Image" className="rounded-md object-cover" />
        //     </AspectRatio>
        // </div>
        <Carousel className="w-full max-w-xs"
        plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
}