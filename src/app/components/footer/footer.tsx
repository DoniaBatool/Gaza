import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; // Importing icons
import Image from 'next/image';
import styles from "./footer.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src="/gaza/gaza.jpg" alt="Logo" width={40} height={40} />
        </Link>
        <h6 className={styles.copyright}>© 2024 Free Gaza | All rights reserved.</h6>
      </div>

      <div className={styles['social-icons']}>
        <Link href="https://www.instagram.com/timesofgaza/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://www.google.com/search?q=gaza+youtubers&oq=gaza+youtube&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDINCAgQABiGAxiABBiKBTINCAkQABiGAxiABBiKBdIBCTU2MzRqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:3dc0ec24,vid:1VyCtXMTAvQ,st:0" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </Link>
        <Link href="https://www.aljazeera.com/news/2024/5/13/why-are-social-media-users-blocking-celebrities-over-israels-gaza-war" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
