// data/popularCategories.js
import {
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaPlane,
  FaHiking,
  FaUtensils,
} from "react-icons/fa";

const popularCategories = [
  {
    id: 1,
    name: "Beach",
    icon: <FaUmbrellaBeach className="text-4xl text-blue-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    link: "/category/beach",
  },
  {
    id: 2,
    name: "Mountains",
    icon: <FaMountain className="text-4xl text-green-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    link: "/category/mountains",
  },
  {
    id: 3,
    name: "City",
    icon: <FaCity className="text-4xl text-purple-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/category/city",
  },
  {
    id: 4,
    name: "Flights",
    icon: <FaPlane className="text-4xl text-pink-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/category/flights",
  },
  {
    id: 5,
    name: "Adventure",
    icon: <FaHiking className="text-4xl text-orange-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    link: "/category/adventure",
  },
  {
    id: 6,
    name: "Food & Culture",
    icon: <FaUtensils className="text-4xl text-red-600" />,
    bgImage:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    link: "/category/food-culture",
  },
];

export default popularCategories;
