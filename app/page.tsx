"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import bannersData from "@/constants/ad-banners.json";
import Banner from "@/components/Banner";
import { RootState } from "@/redux/store";
import { setBanners } from "@/redux/banner-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state: RootState) => state.banners.banners);

  useEffect(() => {
    dispatch(setBanners(bannersData));
  }, [dispatch]);

  return (
    <main className="w-full h-full max-w-3xl mx-auto px-5 flex flex-col gap-24 py-10 items-center justify-start">
      <h5 className="text-3xl font-bold text-white uppercase">Ad Banners</h5>
      <section className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {banners.map((banner) => (
          <div  key={banner.id} className="w-full h-full">
          <Banner
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            />
            </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
