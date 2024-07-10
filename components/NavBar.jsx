import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo">
                    <Image src="/logo.webp" width={100} height={100} /></div>
                    <nav>
                        <ul>
                            <li><a href="">Accueil</a></li>
                            <li><a href="">Pourquoi INNOV-T ?</a></li>
                            <li><a href="">Nos service</a></li>
                            <li><button><a href="">Postulez?</a></button></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
    </>
  )
}

export default NavBar