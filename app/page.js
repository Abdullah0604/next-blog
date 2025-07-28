import AboutNextBlog from "./components/About/About";
import HeroSlider from "./components/Hero/Hero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import PopularBlogs from "./components/PopularBlogs/PopularBlogs";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import StatsSection from "./components/StatsSection/StatsSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSlider />
      <StatsSection />
      <AboutNextBlog />
      <LatestPosts />
      <PopularCategories />
      <PopularBlogs />
    </div>
  );
}
