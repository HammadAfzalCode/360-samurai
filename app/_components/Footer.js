import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="container mx-auto pb-14 flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-10">
          <Image
            width={200}
            height={200}
            src="/assets/logo_black.svg"
            className="select-none"
          />
          <p className="w-full max-w-lg">
            Samurai -Team of solution architects, developers and consultants
            having only one aim in mind{" "}
            <span class="font-semibold">“deliver the best, nothing else”</span>
          </p>
        </div>

        <div className="space-y-10">
          <ul className="flex items-center gap-3 flex-wrap font-semibold *:cursor-pointer hover:*:text-secondary">
            <li>Terms and Conditions</li>
            <li>Publisher Terms</li>
            <li>Privacy Policy</li>
            <li>Our Partners</li>
          </ul>

          <div className="flex items-center gap-6">
            <span className="line w-32 bg-primary"></span>
            <span className="flex items-center gap-7">
              <a
                href="https://instagram.com" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-500">
                <FaLinkedinIn />
              </a>
              <a href="https://facebook.com" className="hover:text-sky-600">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="hover:text-sky-500">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
}