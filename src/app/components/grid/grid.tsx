import styles from "@/app/components/grid/grid.module.css";


interface LightboxProps {
  image: string;
  closeLightbox: () => void;
}

export default function Lightbox({ image, closeLightbox }: LightboxProps) {
  return (
    <div className={styles.lightboxOverlay} onClick={closeLightbox}>
      <div className={styles.lightboxContent}>
        <img src={image} alt="Selected" className={styles.lightboxImage} />
        <button className={styles.closeButton} onClick={closeLightbox}>
          &times;
        </button>
      </div>
    </div>
  );
}
