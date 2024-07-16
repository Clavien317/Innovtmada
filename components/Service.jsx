"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, [])

  return (
    <>
        <p  id='service'></p>
        <div className="service">
            <h2>Nos services</h2>
            <p className='p' data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nam necessitatibus quia
            </p>

            <div className="develop">
                <div className='nbre' data-aos="zoom-in">1</div>
                <br />
                <h1>Developpement site web</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>2</div>
                <br />
                <h1 data-aos="zoom-in">Developpement logiciel</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>

            <div className="develop">
                <div className='nbre'>3</div>
                <br />
                <h1 data-aos="zoom-in">Multimedia</h1>
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                    amet tempore natus accusamus porro ratione praesentium aut
                    omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                </p>
            </div>
        </div>
    </>
  )
}

export default Service