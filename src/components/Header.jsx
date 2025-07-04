import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <Link href="/" className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-[#f36913] py-2 px-2 rounded-lg">
          AL IMDb
        </span>
      </Link>
      <ul className="flex gap-6">
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/sign-in"}>Sign in</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
