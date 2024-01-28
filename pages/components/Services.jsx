import React from 'react'
import css from '../../styles/Services.module.css'
import Image from 'next/image'
import service1 from '../../assets/s1.png'
import service2 from '../../assets/s2.png'
import service3 from '../../assets/s3.png'


const Services = () => {
  return (
    <>
    
     <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
    </div>
    

    {/* features */}

    <div className={css.services}>
      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={service1} alt="" 
          objectFit='cover' 
          layout='intrinsic'/>
        </div>
        
        <span>Easy to Order</span>
        <span>You only need a few step in ordering.</span>
      </div>


      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={service2} alt="" 
          objectFit='cover' 
          layout='intrinsic'/>
        </div>
        
        <span>Easy to Order</span>
        <span>Delivery always on time.</span>
      </div>

      <div className={css.feature}>
        <div className={css.imagewrapper}>
          <Image src={service3} alt="" 
          objectFit='cover' 
          layout='intrinsic'/>
        </div>
        
        <span>Easy to Order</span>
        <span>We deliver not only fast but quality with prority.</span>
      </div>

    </div>
    </>
   
  )
}

export default Services