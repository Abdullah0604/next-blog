import { FaUsers, FaFileAlt, FaTags, FaEnvelope } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl text-orange-500" />,
      label: "Daily Visitors",
      value: "2,500+",
    },
    {
      id: 2,
      icon: <FaFileAlt className="text-3xl text-orange-500" />,
      label: "Published Blogs",
      value: "350+",
    },
    {
      id: 3,
      icon: <FaTags className="text-3xl text-orange-500" />,
      label: "Categories",
      value: "12",
    },
    {
      id: 4,
      icon: <FaEnvelope className="text-3xl text-orange-500" />,
      label: "Subscribers",
      value: "5,000+",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center duration-300 hover:bg-orange-50 hover:scale-110 group "
          >
            <span className="p-2 rounded-full duration-500 group-hover:bg-orange-500 group-hover:*:text-white">
              {stat.icon}
            </span>
            <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
