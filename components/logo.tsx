import Image from "next/image"
import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center space-x-1', className)}>
            <Image
                src="/pictures/FishEyeLogo-v4.png"
                alt="Fish Eye Logo"
                width={100}
                height={100}
                className="h-20 w-20 object-contain"
                priority/>
            <span className="text-foreground text-lg font-semibold tracking-tight">
                Fish Eye
            </span>
        </div>
    )

}
    