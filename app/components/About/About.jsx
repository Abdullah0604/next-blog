import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutNextBlog() {
  const benefits = [
    "Access to expert-written articles across multiple categories",
    "Stay updated with trending topics and latest news",
    "Easy navigation and user-friendly reading experience",
    "Exclusive travel tips and lifestyle guides",
    "Regularly updated content from verified authors",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="About NextBlog"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-orange-500">NextBlog</span>
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            NextBlog is a modern blogging platform designed to provide readers
            with high-quality content from trusted authors. Whether you are
            interested in travel, lifestyle, or trending news, NextBlog offers a
            smooth and engaging reading experience for everyone.
          </p>

          {/* Benefits List */}
          <ul className="space-y-3">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
