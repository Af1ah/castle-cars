"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarImageGalleryProps {
  images: string[];
  title: string;
}

export function CarImageGallery({ images, title }: CarImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative w-20 h-20 flex-shrink-0 cursor-pointer border-2 rounded-lg",
              selectedImage === image
                ? "border-primary"
                : "border-transparent"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="relative w-full aspect-video">
        <Image
          src={selectedImage}
          alt={`${title} main image`}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}