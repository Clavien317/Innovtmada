import React from 'react'
import NavBar from '../../../components/NavBar'
import Offres from '../../../components/Offres'
import Footer from '../../../components/Footer'

function page() {
  return (
    <>
        <NavBar />
        <br />
        <div className="emplois">
            <Offres />

            <Footer />
        </div>
    </>
  )
}

export default page