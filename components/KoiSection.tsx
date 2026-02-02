import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import CameraFallback from "@/components/camera-fallback"

export default function FishSection() {

    const blockFade = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      delay: 0.8,
    },
  },
}



    return (
        <>
        <HeroHeader/>
        <section className="py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-4xl font-semibold lg:text-5xl">Meet the Fish
                    </TextEffect>
                    
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.2}
                        as="h3"
                        className="mt-20 text-xl font-semibold lg:text-4xl">Koi
                    </TextEffect>

                    <div className="mt-8 text-justify"></div>

                    <AnimatedGroup
                    variants={{
                        container: {
                        hidden: {},
                        visible: {},
                        },
                        item: blockFade,
                    }}>
                        <Image
                            src="/pictures/koi.jpg"
                            alt="Koi Fish"
                            width={400}
                            height={400}
                            className="rounded-full mb-4 float-none md:float-right md:ml-6"
                            priority
                        />
                    
                    </AnimatedGroup>



                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4">Scientific Name: Cyprinus rubrofuscus
                        </TextEffect>
                    
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4">Ideal Temperature: 18-25 celcius
                        </TextEffect>
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4">Average Length: 60-90 cm
                        </TextEffect>

                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4">Average Lifespan: 25-50 years
                        </TextEffect>

                    <AnimatedGroup
                    variants={{
                        container: {
                        hidden: {},
                        visible: {},
                        },
                        item: blockFade,
                    }}
                    >

                        <p className="mb-4 text-justify">
                        Koi are colorful fish that are often kept in outdoor ponds or water gardens.
                        They are known for their vibrant colors and patterns, which can include shades
                        of red, orange, yellow, white, and black. Koi are a type of domesticated carp
                        and can grow quite large, with some individuals reaching lengths of up to
                        three feet. They are popular in many cultures, particularly in Japan, where
                        they are considered symbols of good luck, prosperity, and perseverance.
                        </p>
                    </AnimatedGroup>


               </div>
            </div>
        </section>
        </>
    )

}