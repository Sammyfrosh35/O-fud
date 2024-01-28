import React from "react";
import Image from "next/image";
import css from "../../styles/Hero.module.css";
import Cherry from "../../assets/Cherry.png";
import HeroImage from "../../assets/HeroImage.png";
import {UilPhone} from '@iconscout/react-unicons'
import Pizzal from '../../assets/p1.jpg'

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side  */}
      <div className={css.lefside}>
        <div className={css.cherrydiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="" width={40} height={20} priority=""/>
        </div>

        <div className={css.herotext}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span className={css.pizzaText}>Pizza</span>
          </span>
        </div>

        <span className={css.smallText}>
        <span>Our Mission is to Quench your hunger with delicious food and with fast</span>   <span>and free delivery</span>
        
        </span>
<br />

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      {/* right side */}
      <div className={css.right}>
        <div className={css.Imagecontainer}>
            <Image src={HeroImage} alt="" />
        </div>
        <div className={css.contactus}>
            <span>Contact us</span>
            <div>
                <UilPhone color='white'/>
            </div>
        </div>

        <div className={css.pizza}>
            <div>
                <Image src={Pizzal} alt="" objectFit="cover"
                 layout="intrinsic"/>
            </div>
            <div className={css.details}>
                
                    <span>Italian Pizza</span>
                    <span>
                    <span style={{color: "var(--themeRed)"}}>$</span>
                    8.99 </span>
                 </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
