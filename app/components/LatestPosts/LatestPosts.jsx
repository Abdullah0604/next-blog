import latestPosts from "@/app/data/latest-post";
import Post from "./Post";

export default function LatestPosts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
