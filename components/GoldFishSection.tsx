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

    return (
        <>

        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h3 className="text-xl font-semibold lg:text-4xl">Goldfish</h3>

                    <div className="mt-8 text-justify"></div>
                        <Image
                            src="/pictures/goldfish.jpg"
                            alt="Goldfish"
                            width={500}
                            height={500}
                            className="rounded-full mb-4 float-none md:float-left md:ml-6"
                            priority
                        />
                    

                    <p className="mb-4">Scientific Name: Carassius auratus</p>
                    <p className="mb-4">Ideal Temperature: 20-23 celcius</p>
                    <p className="mb-4">Average Length: 20-30 cm</p>
                    <p className="mb-4">Average Lifespan: 10-15 years</p>
                    <p className="mb-4">Goldfish are a popular freshwater fish that are often kept in ponds or aquariums. They are known for their bright colors and can grow quite large, with some individuals reaching lengths of up to three feet. Goldfish are hardy fish that can adapt to a wide range of water conditions and are relatively easy to care for.</p>
                </div>
            </div>
        </section>
        </>
    )

}