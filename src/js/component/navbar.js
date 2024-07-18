import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClickEliminarFav = (personaje) => {
    actions.quitarFavorito(personaje)
  }


  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUPS_ZG-j_cnaz0nYpJkY9wtbR63Lwxdhww&s" alt="Bootstrap" width="100" height="50" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos
            </a>
            <ul className="dropdown-menu">
              {/* * */}
              {store.favoritos?.map((elementoFavorito, key) => (
                <li key={key} className="d-flex align-items-center justify-content-between px-3">
                  <a className="dropdown-item" href={`/${elementoFavorito.id}`}>
                    {elementoFavorito.name}
                  </a>

                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleClickEliminarFav(elementoFavorito)}
                  >
                    <i className="fas fa-trash" style={{ fontSize: "18px" }}></i>
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>



    </nav>
  );
};


{/* * 
*Hacemos un mapeo del array de favoritos, que está en el store. 
Declaramos elementoFavorito y la key para que react sepa por donde va. 
La key la ponemos justo cuando se genera el li, es decir, el primer elemento que vaya a pintar. 
Dentro del li ya irían todos los datos y el elementoFavorito.name nos pinta el campo que  hayamos seleccionado, en este caso "name"
href: recibe el id del elementoFavorito para que poder acceder a la información del elemento seleccionado. 
*/}