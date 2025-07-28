import Image from "next/image";
import Link from "next/link";

function Post({ post }) {
  return (
    <div key={post.id} className=" shadow-md rounded-xl overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        {/* Category */}
        <span className="text-sm text-orange-500 font-semibold  px-3 py-1 rounded-full">
          {post.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold mt-3 h-16">{post.title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>

        {/* Author & Date */}
        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center gap-2">
            <Image
              src={post.authorImage}
              alt={post.authorName}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{post.authorName}</p>
              <p className="text-xs text-gray-500">{post.publishedDate}</p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <Link
          href={post.link}
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-500 duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
export default Post;
