"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li className="text-[16px]">
        <Link
          className={
            pathName === "/"
              ? "text-white bg-[#244D3F] font-semibold"
              : "text-[#6474BB] font-semibold"
          }
          href="/"
        >
          <button>
            <span className="flex items-center gap-1">
              <BiHomeAlt2 />
              Home
            </span>
          </button>
        </Link>
      </li>
      <li className="text-[16px]">
        <Link
          className={
            pathName === "/timeline"
              ? "text-white bg-[#244D3F] font-semibold"
              : "text-[#6474bb] font-semibold"
          }
          href="/timeline"
        >
          <button className="">
            <span className="flex gap-1 items-center">
              <RiTimeLine />
              Timeline
            </span>
          </button>
        </Link>
      </li>
      <li className="text-[16px]">
        <Link
          className={
            pathName === "/stats"
              ? "text-white bg-[#244D3F] font-semibold"
              : "text-[#6474bb] font-semibold"
          }
          href="/stats"
        >
          <button className="">
            <span className="flex items-center gap-1">
              <ImStatsDots />
              Stats
            </span>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <h3 className="text-3xl font-bold">
              <span className="text-[#1F2937]">Keen</span>
              <span className="text-[#244D3F]">Keeper</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-end ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow right-0"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
