import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import CameraFallback from "@/components/camera-fallback"

export default function AboutSection() {

    return (
        <>
        <HeroHeader/>
        <section className="bg-zinc-51 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">About Fish Eye</h2>
                    <p className="mt-4">This projected was created to help develop my understanding of web development using Next.js,type script and docker, as well as concepts like responsive design, accessibility, and UI/UX principles. It also allowed me to learn about hardware integration and real-time video processing through the use of the ESP32 Camera.</p>
                </div>
            </div>

                    <div className="mt-8 text-justify"></div>
                        <Image
                            src="/pictures/next.js-logo.png"
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            className="mb-4 float-none md:float-left md:ml-6"
                            priority
                        />

                    <div className="mt-8 text-justify"></div>
                        <Image
                            src="/pictures/github.png"
                            alt="GitHub Logo"
                            width={500}
                            height={500}
                            className="mb-4 float-none md:float-left md:ml-6"
                            priority
                        />      

                    <div className="mt-8 text-justify"></div>
                        <Image
                            src="/pictures/docker.png"
                            alt="Docker Logo"
                            width={500}
                            height={500}
                            className="mb-4 float-none md:float-right md:ml-6"
                            priority
                        />                                    
        </section>
        </>
    )

}