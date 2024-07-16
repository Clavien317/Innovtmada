"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Professionnel() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);

  return (
    <>
        <div className="professionnel">
            <div className="container">

                <div className="projet" data-aos="zoom-in">
                    <div className='nbre'>+ 20</div>
                    <br />
                    <h1>PROJETS REALISES</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>

                <div className="projet" data-aos="zoom-in">
                    <div className='nbre'>+ 3 ans</div>
                    <br />
                    <h1>Experience</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>

                <div className="partenaire" data-aos="zoom-in">
                    <div className='nbre'>+ 10</div>
                    <br />
                    <h1>Partenaire</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                        amet tempore natus accusamus porro ratione praesentium aut
                        omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                    </p>
                </div>
            </div>
        </div>

        <div className="talent">
            <div className="txt">
            <h1 data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Error numquam labore eligendi voluptatem hic exercitationem? Excepturi quod doloremque obcaecati,
                voluptates, libero soluta corrupti repellat blanditiis atque fugiat nemo, quibusdam rem?
            </h1>
            <br />
            <p data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                amet tempore natus accusamus porro ratione praesentium aut
                omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi
                amet tempore natus accusamus porro ratione praesentium aut
                omnis veritatis et recusandae,exercitationem nesciunt rerum minus repellendus at ab. Similique.
            </p> 

            <button data-aos="zoom-in">Ceci est un bouton</button>
            </div>
            <div className="image">
                <img src="/Full-Stack-Developer-1.webp" alt="" />
            </div>
        </div>
    </>
  )
}

export default Professionnel