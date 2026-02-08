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
                    <p className="mt-4">This project is currently a work in progress</p>
                    <p className="mt-4">This projected was created to help develop my understanding of web development using Next.js,type script and docker, as well as concepts like responsive design, accessibility, Git version control and UI/UX principles. It also allowed me to learn about hardware integration and real-time video processing through the use of the ESP32 Camera.</p>
                </div>
            </div>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Image
                        src="/pictures/next.js-logo.png"
                        alt="Next.js Logo"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                    />

                    <Image
                        src="/pictures/github.png"
                        alt="GitHub Logo"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                    />

                    <Image
                        src="/pictures/docker.png"
                        alt="Docker Logo"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                />
                </div>


                <div className="text-center">
                    <h3 className="text-3xl font-semibold lg:text-5xl">TO DO:</h3>
                    <p className="mt-4">- Align these logos properly ^^^</p>
                    <p className="mt-4">- Convert to HTTPS</p>             
                    <p className="mt-4">- GET THE CAMERA IN THE POND (Need to waterproof it in a case and run a cable)</p>
                    <p className="mt-4">- Add machine learning</p>   
                </div>
            <div className="mt-12 text-center">
                <h2 className="text-4xl font-semibold lg:text-5xl">Software</h2>
            <h2 className="text-4xl font-semibold lg:text-5xl">Hardware</h2>
                <p>ESP32</p>
            <h2 className="text-4xl font-semibold lg:text-5xl">Coding the Esp32</h2>
                <p>Adding Light toggle</p>
                <p>Adding Async</p>
                <p>Adding OTA updates</p>
            <h2 className="text-4xl font-semibold lg:text-5xl">Coding the website</h2>
            </div>
        </section>
        </>
    )

}