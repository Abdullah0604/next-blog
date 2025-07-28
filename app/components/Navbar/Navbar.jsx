import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const links = (
    <>
      <li>
        <Link className="text-gray-700" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-gray-700" href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-gray-700" href="/categories">
          Categories
        </Link>
      </li>
      <li>
        <Link className="text-gray-700" href="/contact">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="border-b-2 border-b-gray-200 bg-white  fixed w-full z-50">
      <div className="navbar p-0 max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
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
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/favicon.png"
              width={35}
              height={20}
              alt="next blog logo"
            />
            <a className=" font-bold px-2 lg:px-0 text-xl">
              Next<span className="text-orange-500">Blog</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="px-6 py-2 rounded-md text-sm bg-black text-white">
            Blog
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
