
"use client"

import React, { useState,useEffect } from 'react';
import CustomizedDialogs from '../components/DialogDetailPoste';
import FormDialog from "../components/FormPostuler"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Offres() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, [])

  const [open, setOpen] = useState(false);
  const [Ouvert, setOuvert] = useState(false);

  const postule = () => {
    setOuvert(true);
  };
  const postuleClose = () => {
    setOuvert(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="offre">
        <div className="container">
          <div className="txt">
            <br />
            <h1 data-aos="zoom-in">Nos offres disponibles actuellement</h1>
            <p className="p2" data-aos="zoom-in">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam nihil nam,
              doloremque deleniti molestiae maxime tempore, vero architecto tempora cumque ipsa
            </p>
          </div>

          <div className="profil">
            <div className="section" data-aos="zoom-in">
              <h1>Developpeur fullstack PHP/ReactJS </h1>
              <p>Lieu poste : En local</p>
              <p>Contrat : CDD</p>

              <div className="postule">
                <button className="candidature" onClick={postule}>Postuler</button>
                <button className="detail" onClick={handleClickOpen}>Detail offre</button>
              </div>
            </div>

            <div className="section" data-aos="zoom-in">
              <h1>Developpeur fullstack Javascript </h1>
              <p>Lieu poste : En local</p>
              <p>Contrat : CDI</p>

              <div className="postule">
                <button className="candidature" onClick={postule}>Postuler</button>
                <button className="detail" onClick={handleClickOpen}>Detail offre</button>
              </div>
            </div>

            <div className="section" data-aos="zoom-in">
              <h1>Developpeur Symfony </h1>
              <p>Lieu poste : En local</p>
              <p>Contrat : CDI</p>

              <div className="postule">
                <button className="candidature" onClick={postule}>Postuler</button>
                <button className="detail" onClick={handleClickOpen}>Detail offre</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizedDialogs open={open} handleClose={handleClose} />
      <FormDialog open={Ouvert} handleClose={postuleClose} />
    </>
  );
}

export default Offres;
