import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import popularBlogs from "@/app/data/popular-blogs";

export default function PopularBlogs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Blogs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularBlogs.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md group"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 h-16 line-clamp-2">
                  {post.title}
                </h3>

                {/* Author & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={post.authorImage}
                    alt={post.authorName}
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.authorName}</p>
                    <p className="text-xs text-gray-500">
                      {post.publishedDate}
                    </p>
                  </div>
                </div>

                {/* Views */}
                <div className="flex items-center text-gray-600 text-sm gap-1">
                  <FaEye className="text-gray-500" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
