import Link from "next/link";
import Image from "next/image";
import popularCategories from "@/app/data/popular-categories";

export default function PopularCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {popularCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={category.bgImage}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition"></div>
              </div>

              {/* Icon & Name */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {category.icon}
                <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
