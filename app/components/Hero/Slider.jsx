import Link from "next/link";

function Slider({ slide }) {
  const { title, description, link, buttonText, image } = slide;
  return (
    <div
      className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center p-4 relative "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="text-white max-w-xl mt-2">{description}</p>
        <Link
          href={link}
          className="mt-4 inline-block bg-white text-black px-5 py-2 rounded font-semibold"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
export default Slider;
