"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Apropos() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);

  return (
    <>
        <div className="section1">
            <div className="image">
                <img src="/software-developer-6521720_1280.jpg" />
            </div>

            <div className="descri">
                <h1>Pourquoi nous choisir ?</h1>
                <span data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur</span>
                <br />
                <br />
                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos, dolorem dolore voluptatum,
                    atque, maiores sit velit repellat vel commodi est doloremque iure amet?
                    Iure veniam vel alias architecto iste sequi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos, dolorem dolore voluptatum,
                    atque, maiores sit velit repellat vel commodi est doloremque iure amet?
                    Iure veniam vel alias architecto iste sequi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <br />
                <p data-aos="zoom-in">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos, dolorem dolore voluptatum,
                    atque, maiores sit velit repellat vel commodi est doloremque iure amet?
                    Iure veniam vel alias architecto iste sequi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <button data-aos="zoom-in">Obtenir un estimation</button>
            </div>
            
        </div>
    </>
  )
}

export default Apropos