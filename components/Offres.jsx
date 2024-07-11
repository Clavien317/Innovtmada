import React from 'react'


function Offres() {
  return (
    <>
        <div className="offre">
            <div className="container">
                <div className="txt">
                    <br />
                    <h1>Nos offres disponibles actuellement</h1>
                    <p className='p2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam nihil nam,
                        doloremque deleniti molestiae maxime tempore, vero architecto tempora cumque ipsa
                    </p> 
                </div>

                <div className="profil">
                    <div className="section">
                        <h1>Developpeur fullstack Flask , ReactJS </h1>
                        <p>Lieu poste : En local</p>
                        <p>Contat : CDD</p>

                        <div className="postule">
                            <button className='candidature'>Postuler</button>
                            <button className='detail'>Detail offre</button>
                        </div>
                    </div>

                    <div className="section">
                        <h1>Developpeur fullstack Javascript </h1>
                        <p>Lieu poste : En local</p>
                        <p>Contat : CDI</p>

                        <div className="postule">
                            <button className='candidature'>Postuler</button>
                            <button className='detail'>Detail offre</button>
                        </div>
                    </div>

                    <div className="section">
                        <h1>Developpeur PHP/Laravel ou Symfony </h1>
                        <p>Lieu poste : En local</p>
                        <p>Contat : CDI</p>

                        <div className="postule">
                            <button className='candidature'>Postuler</button>
                            <button className='detail'>Detail offre</button>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </>
  )
}

export default Offres