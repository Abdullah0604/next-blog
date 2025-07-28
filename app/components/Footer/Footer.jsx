import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-6">
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
          <p className="text-sm leading-relaxed">
            NextBlog is your go-to platform for trending topics, travel tips,
            and expert-written articles across multiple categories.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/category/travel" className="hover:text-white">
                Travel
              </Link>
            </li>
            <li>
              <Link href="/category/lifestyle" className="hover:text-white">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/category/food" className="hover:text-white">
                Food & Culture
              </Link>
            </li>
            <li>
              <Link href="/category/adventure" className="hover:text-white">
                Adventure
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest articles straight to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-sm w-full text-gray-800"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-md text-sm text-white hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NextBlog. All rights reserved.
      </div>
    </footer>
  );
}
