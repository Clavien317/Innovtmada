import Apropos from '../components/Apropos'
import Contenu from '../components/Contenu'
import Equipe from '../components/Equipe'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Offres from '../components/Offres'
import Professionnel from '../components/Professionnel'
import Service from '../components/Service'
import React from 'react'
import  Carousels from '../components/Carousel'
function page() {
  return (
      <>
        <div className='body'>
        <main>
          <NavBar />
          <Contenu />
        </main>
        </div>
        <Apropos />
        <Professionnel />
        <Service />
        <Offres />

        {/* <Equipe /> */}
        <Carousels />

        <Footer />

      </>
  )
}

export default page