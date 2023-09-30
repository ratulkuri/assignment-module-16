"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Navbar,
  IconButton,
  Collapse
} from "../MaterialReact";
import { usePathname, useSearchParams } from 'next/navigation'

import NavList from "./NavList";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    setOpenNav((status) => !!status ? false : status);
  }, [pathname, searchParams])

  return (
    <>
      {/* <div className="container"> */}
        <Navbar className="absolute left-0 right-0 top-0 z-50 backdrop-filter-none mx-auto max-w-full rounded-none bg-transparent shadow-none py-2 px-4 lg:px-8 lg:py-4 border-none">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Link
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <Image
                className="w-auto h-[30px]"
                src={"/assets/images/logo.png"}
                alt="logo"
                width={309}
                height={45}
              />
            </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">
                <NavList />
              </div>
              <button className="hidden lg:inline-block btn btn-primary-outline w-full">
                <span>Login</span>
              </button>
              <button className="hidden lg:inline-block btn btn-primary w-full">
                <span>Register</span>
              </button>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav} className="block  lg:hidden overflow-hidden">
            <div className="container mx-auto py-3 mt-4 rounded-lg bg-white">
              <NavList />
              <div className="flex gap-2">
                <button className="btn btn-primary-outline mb-2 w-full">
                  <span>Login</span>
                </button>
                <button className="btn btn-primary mb-2 w-full">
                  <span>Register</span>
                </button>
              </div>
            </div>
          </Collapse>
        </Navbar>
      {/* </div> */}
    </>
  );
};

export default Header;
