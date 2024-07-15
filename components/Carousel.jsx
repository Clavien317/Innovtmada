import React from 'react'

function Carousel() {
  return (
    <>
        <p id='equipe'></p>
        <div className="equipe">
            <h1>Notre Equipes</h1>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    <div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                            src="/50287514-close-up-d-un-homme-asiatique-avec-des-lunettes-de-soleil-en-regardant-dans-le-miroir-de-la-voiture.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">NAMBININA Clavien</h2>
                            <p>Chaque ligne de code que tu écris est une pierre posée sur le chemin de l'innovation.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                            src="/portrait-face-boy-glasses.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">NAMBININA Clavien</h2>
                            <p>Chaque ligne de code que tu écris est une pierre posée sur le chemin de l'innovation.</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                            src="/boy-black-and-white-glasses.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">NAMBININA Clavien</h2>
                            <p>Chaque ligne de code que tu écris est une pierre posée sur le chemin de l'innovation.</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                            src="/portrait-face-boy-glasses.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">NAMBININA Clavien</h2>
                            <p>Chaque ligne de code que tu écris est une pierre posée sur le chemin de l'innovation.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}

export default Carousel