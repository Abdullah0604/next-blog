import HeroSlider from "./components/Hero/Hero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import StatsSection from "./components/StatsSection/StatsSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSlider />
      <StatsSection />
      <LatestPosts />
      <PopularCategories />
    </div>
  );
}
