import React from 'react'
import {UilFacebook,UilGithub,UilInstagram} from '@iconscout/react-unicons'
import css from '../../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45}/>
        <UilGithub size={45}/>
        <UilInstagram size={45}/>
      </div>
      <div className={css.Logo}>
          <Image src={Logo} alt=""  width={30} height={30}/>
          <span>O-Fud</span>
        </div>
    </div>
  )
}

export default Footer