import React, { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext"


export const CartaPersonajes = ({ name, id }) => {
  const { store, actions } = useContext(Context);
  const [caracteristica, setCaracteristica] = useState(null)
  const urlImagen = `https://starwars-visualguide.com/assets/img/characters/`

  useEffect(() => {
    const detallesPlaneta = async () => {
      const data = await actions.obtenerPersonaje(id);
      console.log(id);
      setCaracteristica(data?.result.properties);
    };
    detallesPlaneta();
  }, [id]);

  if (!caracteristica) {
    return <div>Loading...</div>;
  }

  // Creamos la función que recibirá la función para añadir el favorito.
  //  const caracteristicaConId = { ...caracteristica, id } --> recibe todas las caracteríticas (variable que está declarada arriba y es lo mismo que
  //  las properties que devuelve la API) y además le pasamos el Id que viene como parámetro de entrada en la definición del componente). Todo eso
  //  se guarda en caracteristicaconID, y esto es lo que se le pasa a la función de añadirFavoritos (flux)
  // actions.anadirFavorito recibe característica porque es lo que contiene toda la información del personaje, y es lo que estamos usando  como 
  // variable en este componente.  
  const handleClick = () => {
    const caracteristicaConId = { ...caracteristica, id };
    actions.anadirFavorito (caracteristicaConId)
  }





  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={urlImagen+id+`.jpg`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {/* Se obtiene el atributo "properties" que nos devuelve la llamada al servicio de "obtenerPersonaje" y este atributo
        es un objeto con las caracterísiticas de cada personaje. Dentro de cada li pintamos la caracteristica
        que nos interesa  */}
        <li className="list-group-item">Gender: {caracteristica.gender}</li>
        <li className="list-group-item">Hair color: {caracteristica.hair_color}</li>
        <li className="list-group-item">Eye color: {caracteristica.eye_color}</li>
      </ul>
      <div className="card-body">
        <Link className="btn btn-primary" to={'/' + id}>Learn More</Link>

          {/* BOTÓN FAVORITOS */}
        <button type="button" className="btn" onClick={handleClick}>
          <i className='far fa-heart' style={{ fontSize: '48px', color: 'red' }}></i>
        </button>


      </div>
    </div>

  );
};