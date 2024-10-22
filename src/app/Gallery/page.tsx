"use client"
import { useState } from "react";
import styles from "@/app/Gallery/gallery.module.css"
import Lightbox from "@/app/components/grid/grid";

const images: string[] = [
  "/gaza/slider/hd1.webp",
  "/gaza/slider/hd2.webp",
  "/gaza/slider/hd3.webp",
  "/gaza/slider/hd4.webp",
  "/gaza/slider/hd5.webp",
  "/gaza/slider/hd6.webp",
  "/gaza/slider/hd7.webp",
  "/gaza/slider/hd8.webp",
  "/gaza/slider/hd9.webp",
  "/gaza/slider/hd10.webp",
  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div className={styles.gridItem} key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={styles.gridImage}
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox image={selectedImage} closeLightbox={closeLightbox} />
      )}
    </div>
  );
}
