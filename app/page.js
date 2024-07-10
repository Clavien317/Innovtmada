import Apropos from '@/components/Apropos'
import Contenu from '@/components/Contenu'
import NavBar from '@/components/NavBar'
import Professionnel from '@/components/Professionnel'
import Service from '@/components/Service'
import React from 'react'

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
      </>
  )
}

export default page