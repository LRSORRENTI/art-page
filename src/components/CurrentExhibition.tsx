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
            className="w-96"
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
                                <div className="w-full rounded">
                                    <AspectRatio ratio={32 / 18}>
                                        <img
                                            width={100}
                                            height={16} // Adjusted height for a 16:9 aspect ratio
                                            src={`/Liminal/liminal${index + 1}.jpg`}
                                            alt={`Liminal Image ${index + 1}`}
                                            className="rounded "
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
