import React, { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext"


export const CartaPlanetas = ({ name, id }) => {
  const { store, actions } = useContext(Context);
  const [carPlaneta, setCarPlaneta] = useState(null);
  const [esFavorito, setIsFavorito] = useState(false);
  const urlPlanetas = `https://starwars-visualguide.com/assets/img/planets/`

  useEffect(() => {
    const detalles = async () => {
      const dataPlanetas = await actions.obtenerPlaneta(id);
      console.log(id);
      setCarPlaneta(dataPlanetas?.result.properties);
    };
    detalles();
  }, [id]);

  if (!carPlaneta) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    const caracteristicaConId = { ...carPlaneta, id };
    actions.anadirFavoritoPlaneta (caracteristicaConId)
    setIsFavorito(!esFavorito);
  }


  return (

    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={urlPlanetas+id+`.jpg`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Population: {carPlaneta.population}</li>
        <li className="list-group-item">Terrain: {carPlaneta.terrain}</li>
      </ul>
      <div className="card-body">
        <Link className="btn btn-primary" to={'/planets/' + id}>Learn More</Link>
        {/* BOTÓN FAVORITOS */}
        <button type="button" className="btn" onClick={handleClick}>
          <i className='far fa-heart' style={{ fontSize: '48px', color: 'red' }}></i>
        </button>
      </div>
    </div>


  );
};