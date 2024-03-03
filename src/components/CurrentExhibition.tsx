import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CurrentExhibition() {
    return (
        <Carousel
            className="w-full max-w-xs"
            plugins={[
                Autoplay({
                    delay: 3500,
                }),
            ]}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <div className="w-full">
                                    <AspectRatio ratio={16 / 9}>
                                        <Image
                                            width={400}
                                            height={169} // Adjusted height for a 16:9 aspect ratio
                                            src={`/Liminal/liminal${index + 1}.jpg`}
                                            alt={`Liminal Image ${index + 1}`}
                                            className="rounded-md object-cover"
                                        />
                                    </AspectRatio>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
