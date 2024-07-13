import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="bg-primary text-secondary min-h-screen grid place-content-center">
      <div className="space-y-20">
              <div className="text-4xl lg:text-7xl">Not Found</div>
              <Link href="/" className="w-fit mx-auto flex items-center justify-center gap-3 py-3 px-6 rounded-md bg-secondary text-white">
                <FaHouse/> Back to Home
              </Link>
      </div>
    </div>
  );
}
