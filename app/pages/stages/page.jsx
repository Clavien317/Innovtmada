import React from 'react'
import NavBar from '../../../components/NavBar'

function page() {
  return (
    <>
        <NavBar />
        <br />
        <div className="stage">
            <h1>Demande des stages</h1>

            <form action="">
                <div className="champ">
                    <label htmlFor="">Nom complet <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Email <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Stage en  <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Spécialité <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Niveau dans ce domaine  <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Comment trouvez-vous notre entreprise ?  <span>*</span></label>
                    <br />
                    <input type="text" name='' />
                </div>

                <div className="champ">
                    <label htmlFor="">Votre motivation pour stage chez INNOV-T</label>
                    <br />
                    <textarea name="" id=""></textarea>
                </div>

                <div className="champ">
                    <label htmlFor="">Importer votre CV  <span>*</span></label>
                    <br />
                    <input type="file" name='' />
                </div>

                <div className="submit">
                    <button>Envoyer </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default page