

import Hero from './components/hero/hero'; // Ensure Hero is imported
import Hero2 from './components/hero/hero2';
import styles from './components/home/home.module.css'; // Your CSS module


const Home = () => {
  return (
    <main>
      
      <div className={styles.home}>
        
        <div className={styles.content}>
          <Hero />
          </div>
        </div>
      <Hero2/>
      
      
    </main>
  )
}

export default Home;
