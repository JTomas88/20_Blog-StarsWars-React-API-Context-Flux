import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personaje.css"

export const Personaje = () => {  //no le pasamos nada porque lo estamos haciendo con el useParams, desestructuramos la url por la que se accede al componente. 

    const { store, actions } = useContext(Context);
    const [caracteristicas, setCaracteristicas] = useState(null)
    const { uid } = useParams() //desestructura del id en la url.
     const urlImagen = `https://starwars-visualguide.com/assets/img/characters/`





    useEffect(() => {
        const detalles = async () => {
            const data = await actions.obtenerPersonaje(uid);
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
                    <p>{caracteristicas.description}</p>
                </div>
                <div className="col">
                <img className="card-img-top" src={urlImagen+uid+`.jpg`} />
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-2">
                    <h5>Mass</h5>
                    <p>{caracteristicas.properties.mass}</p>
                </div>
                <div className="col-md-2">
                    <h5>Birth Year</h5>
                    <p>{caracteristicas.properties.birth_year}</p>
                </div>
                <div className="col-md-2">
                    <h5>Height</h5>
                    <p>{caracteristicas.properties.height}</p>
                </div>
                <div className="col-md-2">
                    <h5>Gender</h5>
                    <p>{caracteristicas.properties.gender}</p>
                </div>
                <div className="col-md-2">
                    <h5>Hair Color</h5>
                    <p>{caracteristicas.properties.hair_color}</p>
                </div>
                <div className="col-md-2">
                    <h5>Eye Color</h5>
                    <p>{caracteristicas.properties.eye_color}</p>
                </div>
            </div>
        </div>
    );

};
