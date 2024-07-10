import Apropos from '@/components/Apropos'
import Contenu from '@/components/Contenu'
import NavBar from '@/components/NavBar'
import Professionnel from '@/components/Professionnel'
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
      </>
  )
}

export default page