import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const Planeta = () => {  //no le pasamos nada porque lo estamos haciendo con el useParams, desestructuramos la url por la que se accede al componente. 

    const { store, actions } = useContext(Context);
    const [caracteristicas, setCaracteristicas] = useState(null)
    const { uid } = useParams() //desestructura del id en la url.
    const urlPlanetas = `https://starwars-visualguide.com/assets/img/planets/`


    useEffect(() => {
        const detalles = async () => {
            const data = await actions.obtenerPlaneta(uid);
            console.log(uid);
            setCaracteristicas(data?.result);
        };

        detalles(); //llamamos a la función creada con el useEfect para que se ejecute. 
    }, [uid]); //tenemos que llamar a la función cada vez que cambie el uid del personaje. 

    if (!caracteristicas) {
        return <div>Loading...</div>;
    }


    return (
<div className="container my-5">
            <div className="row mb-4">
                <div className="col-md-8">
                    <h1>{caracteristicas.properties.name}</h1>                    
                </div>
                <div className="col">
                <img className="card-img-top" src={urlPlanetas+uid+`.jpg`} />
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-2">
                    <h5>Orbital period</h5>
                    <p>{caracteristicas.properties.orbital_period}</p>
                </div>
                <div className="col-md-2">
                    <h5>Climate</h5>
                    <p>{caracteristicas.properties.climate}</p>
                </div>
                <div className="col-md-2">
                    <h5>Diameter</h5>
                    <p>{caracteristicas.properties.diameter}</p>
                </div>
                <div className="col-md-2">
                    <h5>Populatio</h5>
                    <p>{caracteristicas.properties.population}</p>
                </div>
                <div className="col-md-2">
                    <h5>Terrain</h5>
                    <p>{caracteristicas.properties.terrain}</p>
                </div>
                <div className="col-md-2">
                    <h5>Gravity</h5>
                    <p>{caracteristicas.properties.gravity}</p>
                </div>
            </div>
        </div>
    );

};

