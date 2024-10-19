
import styles from "./hero.module.css"


const Hero = () => {
  return (
    <div className={styles.hero}>
  
     <h1 className={styles.h1}>This Is Gaza</h1>
     <div className={styles.alert}>
      <h1># Cease Fire Now #</h1>
      </div>
     <h2>The latest death toll stands at 42,183 Palestinians and <br/>
      1,139 people killed in Israel since <br/>October 7.</h2>
    
      
    </div>
  );
};

export default Hero;