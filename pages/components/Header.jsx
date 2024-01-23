import React from 'react'
import css from '../../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo2.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

const Header = () => {
  return (
    <div className={css.header}>
        {/* Logo */}
        <div className={css.Logo}>
          <Image src={Logo} alt=""  width={30} height={30}/>
          <span>O-Fud</span>
        </div>

        {/* menu side */}
        <ul className={css.menu}>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>


        {/* Right side */}
        <div className={css.rightside}>
          <div className={css.cart}>
            <UilShoppingBag sixe={35} color="#2E2E2E"/>
            <div className={css.badge}>
              1
            </div>
        </div>
        </div>
        </div>
  )
}

export default Header