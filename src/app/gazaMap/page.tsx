import Image from "next/image";
import styles from "@/app/gazaMap/gazaMap.module.css"; // Import the CSS module

const GazaMaps = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.divh6}>Israel-Gaza War</h6>
      
      <h1 className={styles.h1}>Gaza-Nowhere Safe To Go!!</h1>
      <p className={styles.h4}>
        After ordering 1.1 million people to leave the Northern Gaza Strip, 
        the Israeli Army published a map online that divides the besieged enclave into more than 600 numbered zones with instructions
        to evacuate part of the south.
      </p>
      <Image src="/gaza/map1.jpg" alt="map1" width={500} height={450} className={styles.image} />

      <h6 className={styles.divh6}>Israel-Palestine Conflict</h6>
      <h1 className={styles.h1}>The Besieged Gaza Strip</h1>
      <p className={styles.h4}>
        The Palestinian enclave — home to 2.3 million people — has been under an Israeli air,land and sea blockade since 2007.
      </p>
      <Image src="/gaza/map2.jpg" alt="map2" width={500} height={450} className={styles.image} />

      <h6 className={styles.divh6}>Israel-Palestine Conflict</h6>
      <h1 className={styles.h1}>How The Hamas Unfolded</h1>
      <p className={styles.h4}>
        On the morning of October 7, Saturday, Hamas fired thousands of rockets and sent fighters
        into Israel in a surprise attack. Israel responded with a deadly bombardment of the
        blockaded coastal enclave and declared a state of war.
      </p>
      <Image src="/gaza/map3.jpg" alt="map3" width={500} height={450} className={styles.image} />
    </div>
  );
};

export default GazaMaps;
