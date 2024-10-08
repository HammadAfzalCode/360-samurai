import Link from "next/link";
import Image from "next/image";

import { LuChevronDown } from "react-icons/lu";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link as ReactLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center z-100">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={200} height={200} className="w-[150px] sm:w-[200px]" />
      </Link>
      <ul className="hidden text-sm lg:flex items-center gap-6">
        <ReactLink to="features-section"
          smooth={true}
          duration={500}
          className="cursor-pointer">
          <li className="flex items-center gap-2 cursor-pointer group">
            Features
            {/* <LuChevronDown className="text-secondary group-hover:translate-y-1 transition-transform duration-300" /> */}
          </li></ReactLink>
        <ReactLink to="solutions-section"
          smooth={true}
          duration={500}
          className="cursor-pointer">
          <li className="flex items-center gap-2 cursor-pointer group">
            Business needs
            {/* <LuChevronDown className="text-secondary group-hover:translate-y-1 transition-transform duration-300" /> */}
          </li></ReactLink>
        <ReactLink to="stack-section"
          smooth={true}
          duration={500}
          className="cursor-pointer" >
          <li className="flex items-center gap-2 cursor-pointer group">
            Stack Partners
            {/* <LuChevronDown className="text-secondary group-hover:translate-y-1 transition-transform duration-300" /> */}
          </li></ReactLink>
        <ReactLink to="footer"
          smooth={true}
          duration={500}
          className="cursor-pointer">
          <li className="flex items-center gap-2 cursor-pointer group">
            About Us
          </li></ReactLink>
      </ul>
      {/* <div className="flex items-center gap-2">
        <Link
          href="https://facebook.com"
          className="hover:text-secondary transition duration-300">
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com"
          className="hover:text-secondary transition duration-300">
          <FaTwitter />
        </Link>
        <Link
          href="https://linkedin.com"
          className="hover:text-secondary transition duration-300">
          <FaLinkedinIn />
        </Link>
      </div> */}

      <div>

        <button className="px-4 py-2 rounded-md transition-all duration-300 bg-secondary ">Our Services</button>
      </div>
    </nav>
  );
}
