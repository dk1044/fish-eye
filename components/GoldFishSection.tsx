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

        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">



                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.2}
                        as="h3"
                        className="text-xl font-semibold lg:text-4xl">Goldfish
                    </TextEffect>

                    <AnimatedGroup
                    variants={{
                        container: {
                        hidden: {},
                        visible: {},
                        },
                        item: blockFade,
                    }}>
                        <Image
                            src="/pictures/goldfish.jpg"
                            alt="Goldfish"
                            width={500}
                            height={500}
                            className="rounded-full mb-4 float-none mt-16 md:float-left md:ml-6"
                            priority
                        />
                    
                    </AnimatedGroup>

{/* 
                    <h3 className="text-xl font-semibold lg:text-4xl">Goldfish</h3>

                    <div className="mt-8 text-justify"></div>
                        <Image
                            src="/pictures/goldfish.jpg"
                            alt="Goldfish"
                            width={500}
                            height={500}
                            className="rounded-full mb-4 float-none md:float-left md:ml-6"
                            priority
                        /> */}
                    
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className=" mt-8 mb-4 text-lg">Scientific Name: Carassius auratus
                        </TextEffect>
                    
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4 text-lg">Ideal Temperature: 20-23 °C
                        </TextEffect>
                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4 text-lg">Average Length: 20-30 cm
                        </TextEffect>

                    <TextEffect
                        preset='fade-in-blur'
                        speedSegment={0.3}
                        delay={0.4}
                        as="p"
                        className="mb-4 text-lg">Average Lifespan: 10-15 years
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

                        <p className="mb-4 text-lg text-justify md:text-right">
                        Goldfish are a popular freshwater fish that are often kept in ponds or aquariums. They are known for their bright colors and can grow quite large, with some individuals reaching lengths 
                        of up to three feet. Goldfish are hardy fish that can adapt to a wide range of water conditions and are relatively easy to care for.
                        </p>
                    </AnimatedGroup>                    


                </div>
            </div>
        </section>
        </>
    )

}