"use client"; // ✅ Must be at the top

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderData } from "@/app/data/slider-data";
import Slider from "./Slider";

export default function HeroSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      className="mySwiper h-[500px] "
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={2000}
    >
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slider slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
