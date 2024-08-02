"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBannerStart,
  updateBannerSuccess,
  updateBannerFailure,
} from "@/redux/banner-slice";
import Image from "next/image";
import { Button } from "./ui/button";
import { RootState } from "@/redux/store";

interface EditBannerProps {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
}

const EditBanner = ({ banner }: EditBannerProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);

  const loading = useSelector((state: RootState) => state.banners.loading);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateBannerStart());

    try {
      setTimeout(() => {
        dispatch(
          updateBannerSuccess({
            ...banner,
            title,
            description,
            cta,
            image,
          })
        );
      }, 1000);
     
    } catch (error) {
      dispatch(updateBannerFailure());
    }
  };

  return (
    <section className="w-full h-full flex flex-col gap-10 items-start justify-start text-white">
      <h2 className="text-xl font-semibold">Edit Banner</h2>
      <form
        className="w-full h-full flex flex-col gap-5"
        onSubmit={handleUpdate}
      >
        <Image
          src={image}
          alt={banner.title}
          width={100}
          height={100}
          className="w-[300px] h-[180px] rounded object-cover"
        />
        <input
          type="file"
          accept="image/*"
          className="w-full h-fit flex items-center justify-between max-w-md px-2 py-3 outline-none border-none rounded bg-black-1 text-gray-1 "
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files?.[0] as Blob))
          }
        />
        <input
          type="text"
          id="title"
          name="title"
          maxLength={20}
          placeholder="Title"
          className="w-full max-w-md px-2 py-5 outline-none border-none rounded bg-black-1 text-gray-1 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          maxLength={50}
          className="w-full max-w-md px-2 py-5 outline-none border-none rounded bg-black-1 text-gray-1 "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          id="cta"
          name="cta"
          placeholder="Button Text"
          className="w-full max-w-md px-2 py-5 outline-none border-none rounded bg-black-1 text-gray-1 "
          value={cta}
          onChange={(e) => setCta(e.target.value)}
        />
        <Button
          type="submit"
          className="w-full disabled:cursor-not-allowed"
          variant="destructive"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </Button>
      </form>
    </section>
  );
};

export default EditBanner;
