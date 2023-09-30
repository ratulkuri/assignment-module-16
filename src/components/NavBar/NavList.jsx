import Link from 'next/link';
import { Typography } from '../MaterialReact';

const NavList = () => {
  return (
    <>
        <ul className="primary-nav-list mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium font-poppin"
            >
                <Link href="/" className="nav-link flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium font-poppin"
            >
                <Link href="/team" className="nav-link flex items-center">
                    Team
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium font-poppin"
            >
                <Link href="/service" className="nav-link flex items-center">
                    Service
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium font-poppin"
            >
                <Link href="/project" className="nav-link flex items-center">
                    Project
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium font-poppin"
            >
                <Link href="/testimonial" className="nav-link flex items-center">
                    Testimonials
                </Link>
            </Typography>
        </ul>
    </>
  )
}

export default NavList;