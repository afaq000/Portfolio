import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/afaqhussain.pdf'; // Replace with the actual path to your PDF file
    link.download = '/afaqhussain.pdf'; // Specify the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Afaq Hussain</h1>
        {/* <p className={styles.description}>
          I'm a Mern-Stack developer 
        </p> */}
         <h1>
  <Typewriter
    className="animate"
    words={['Mern-Stack developer', ' Profissinal Coder ', '']}
    loop={[]}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  /></h1>
  <div className="downlodcv-btn">
    <button  onClick={handleDownload}>Download CV</button>
    </div>
      

</div>
      <img 
    src={getImageUrl("hero/pic7.png")}
    alt="Hero image of me"
    className={`${styles.heroImg} animate`}
  />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
