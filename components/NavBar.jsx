import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo">
                    <Image src="/logo.webp" width={100} height={100} />
                </div>
                    <nav className="navbar-center hidden lg:flex">
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