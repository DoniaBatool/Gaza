import Image from "next/image";
import styles from "@/app/components/hero/hero2.module.css";

const Hero2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Israel-Palestine Conflict</h1>
        <div>
          <p className={styles.caption}>
            Palestinians living near Netzarim Corridor in central Gaza told to
            <br />
            leave as Israel prepares to use great force against Hamas.
          </p>
          <Image
            src="/gaza/hero2.webp"
            alt="gazapic"
            height={600}
            width={900}
            className={`${styles.image} ${styles.right}`} // Apply right animation
          />
          <p className={styles.caption}>
            The latest Israeli evacuation order is the first issued in weeks for
            Gaza and could signal a new wave of mass displacement
            <br />
            and another humanitarian crisis.
          </p>
          
          <br />
          <p className={styles.date}>5 Oct 2024</p>
          
          <p className={styles.caption}>
            Israel has issued a new warning to thousands of displaced Palestinians
            sheltering in
            <br />
            central Gaza, saying its military is preparing to use “great force” 
            against Hamas in the
            <br />
            area as it continues to pummel
            <br />
            the besieged strip with attacks that have killed at least
            <br />
            12 people since Saturday morning.
          </p>
          
          <p className={styles.caption}>
            The evacuation call issued on Saturday is the first in weeks for Gaza,
            signalling another
            
            possible humanitarian crisis with a new wave of mass displacement as
            Israel war approaches
            
            its one-year mark,
            having killed at least 41,825 Palestinians, mostly women
            
            and children, and wounded at least 96,910.
          </p>
          
          <h2 className={styles.subheading}>
            PHOTOS: Before and after of Israeli raid on (Al Shifa Hospital) Gaza
          </h2>
          
         
          <p className={styles.caption}>
            This combination of pictures shows the damage at Gaza Al-Shifa hospital
            after the Israeli military
            <br />
            withdrew from the complex housing the hospital on April 1 (top), and
            displaced Palestinians gathering in
            <br />
            the yard of Gaza Al-Shifa hospital on December 10, 2023.
          </p>
          <Image
            src="/gaza/shifa3.jpg"
            alt="shifa3"
            width={900} // Set width to 900 to match other images
            height={600}
            className={`${styles.image} ${styles.left}`} // Apply left animation
          />
          <p className={styles.caption}>
            This combination of pictures shows the damage at Gaza Al-Shifa hospital
            after the Israeli military
            <br />
            withdrew from the complex housing the hospital on April 1, 2024 (top),
            and displaced Palestinians gathering
            <br />
            in the yard of Gaza Al-Shifa hospital on December 10, 2023.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
