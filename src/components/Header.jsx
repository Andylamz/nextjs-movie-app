import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <Link href="/" className="flex gap-1 items-center">
      <span className="text-2xl font-bold rounded-lg dark:text-[#f36913]">
          AL 
        </span>
        <span className="text-2xl font-bold bg-[#f36913] py-2 px-2 rounded-lg dark:text-white">
           IMDb
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeBtn />
        <ul className="flex gap-6">
          <li className="hidden sm:block">
            <Link
              href="/"
              className="hover:text-[#f36913] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/about"
              className="hover:text-[#f36913] transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <SignedOut>
            <li>
              <Link
                href="/signin"
                className="hover:text-[#f36913] transition-colors duration-300"
              >
                Sign in
              </Link>
            </li>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </ul>
      </div>
    </div>
  );
}

export default Header;
