
import Image from "next/image";
import styles from "@/app/about/about.module.css"; // Import your CSS

const About = () => {
  return (
    <div>
      <div className={styles["about-container"]}>
        <div className={styles.content}>
          {/* Removed the Gaza Today heading */}
          
          <div className={styles["image-container"]}>
            <Image 
              src="/gaza/about/img10.jpg" 
              alt="aboutpic3" 
              width={800}  // Set a larger width for better responsiveness
              height={450} 
              className={styles.imageAnimation}
            />
          </div>

          <h1 className={styles.h1para}>
            What is the main reason of Israel-Palestine conflict?
          </h1>
          <p className={styles.paragraph}>
            The conflict has its origins in the rise of Zionism in Europe and the consequent
            first arrival of Jewish settlers to Ottoman Palestine in 1882. The local Arab population 
            increasingly began to oppose Zionism, primarily out of fear of territorial displacement and dispossession.
          </p>

          <h1 className={styles.h1para}>How Did The War Break Out?</h1>
          <p className={styles.paragraph}>
            On 7 October 2023, Palestinian militants attacked Israel, killing 1,143 people (mostly civilians) 
            and beginning the Israel Hamas war. Israel responded by bombing the Gaza Strip and launching 
            an invasion that has killed more than 34,000 Gazans as of April 2024.
          </p>

          <div className={styles.imageContainerNew}>
            <Image 
              src="/gaza/about/Aboutpic.jpg" 
              alt="aboutpic" 
              width={400} 
              height={450} 
              className={styles.imageAnimation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
