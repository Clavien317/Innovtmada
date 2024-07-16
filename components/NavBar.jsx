"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';


function NavBar() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        })
      }, [])

  return (
    <>
        <header>
            <div className="container">
                <div className="logo">
                    <Image src="/logo.webp" width={100} height={100} />
                </div>
                    <nav className="navbar-center hidden lg:flex" data-aos="zoom-in">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/#service">Nos service</a></li>
                            <li><a href="/#equipe">Equipes</a></li>
                            <li>
                                <details>
                                <summary>Postulez ?</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a href='/pages/stages'>Stages</a></li>
                                    <li><a href='/pages/emploies'>Emploies</a></li>
                                </ul>
                                </details>
                            </li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
    </>
  )
}

export default NavBar