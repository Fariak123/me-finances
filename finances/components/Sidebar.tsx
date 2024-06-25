'use client'

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = ({user}: SiderbarProps) => {
    const pathName = usePathname()

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href='/' className="mb-12 cursor-pointer items-center flex gap-2">
                    <Image
                        src='/icons/logo-black.png'
                        width={56}
                        height={56}
                        alt='MeFinances logo'
                        className="aspect-square object-cover"
                    /> 
                    <h1 className="sidebar-logo">
                        MeFs
                    </h1>   
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}`)

                    return (
                        <Link href={item.route} key={item.label} className={cn('sidebar-link', {
                            'bg-bank-gradient': isActive
                        })}>
                            <div className="relative size-6">
                                <Image
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({'brightness-[3] invert-0': isActive})}
                                />
                            </div>
                            <p className={cn('sidebar-label', {'!text-white': isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                USER
            </nav>

            FOOTER
        </section>
    )
}

export default Sidebar