import React, { useEffect } from 'react'
import css from '../../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo2.png'
import {UilShoppingBag, UilReceipt} from '@iconscout/react-unicons'
import { useStore } from "../../store/store"
import Link from 'next/link'
// import  {useState} from 'react'
import { useState } from 'react';





const Header = () => {


const [Order, setOrder] = useState("");
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  

  const items = useStore((state)=> state.cart.pizzas.length)
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
        <Link href = '/cart'>
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E"/>
            <div className={css.badge}>{items}</div>
        </div>
        </Link>

      {Order && (
        <Link href={`/order/${Order}`}>
          <div className={css.cart}>
            <UilReceipt size={35} color='#2E2E2E'/>
            {Order != "" && < div className={css.badge} >1</div>}
          </div>
        </Link>
      )}

        </div>
        </div>
  )
}

export default Header