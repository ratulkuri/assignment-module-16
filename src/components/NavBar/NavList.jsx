"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography } from '../MaterialReact';

const NavList = () => {
    const pathname = usePathname()

    return (
        <>
            <ul className="primary-nav-list mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium font-poppin"
                >
                    <Link href="/" className={`${pathname === "/" ? "text-theme-green" : "text-gray-800"} nav-link flex items-center`}>
                        Home
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium font-poppin"
                >
                    <Link href="/team" className={`${pathname === "/team" ? "text-theme-green" : "text-gray-800"} nav-link flex items-center`}>
                        Team
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium font-poppin"
                >
                    <Link href="/services" className={`${pathname === "/services" ? "text-theme-green" : "text-gray-800"} nav-link flex items-center`}>
                        Services
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium font-poppin"
                >
                    <Link href="/projects" className={`${pathname === "/projects" ? "text-theme-green" : "text-gray-800"} nav-link flex items-center`}>
                        Projects
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium font-poppin"
                >
                    <Link href="/testimonials" className={`${pathname === "/testimonials" ? "text-theme-green" : "text-gray-800"} nav-link flex items-center`}>
                        Testimonials
                    </Link>
                </Typography>
            </ul>
        </>
    )
}

export default NavList;