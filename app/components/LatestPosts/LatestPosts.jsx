import latestPosts from "@/app/data/latest-post";
import Post from "./Post";

export default function LatestPosts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
