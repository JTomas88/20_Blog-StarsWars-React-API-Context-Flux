import React, { act, useContext, useEffect, useState } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CartaPersonajes } from "../component/CartaPersonajes.jsx";
import {CartaPlanetas} from "../component/CartaPlanetas.jsx"

export const Home = () => {

	const { store, actions } = useContext(Context);
	const validacionPersonajes = store.personajes;
	console.log(("lista de personajes: ", validacionPersonajes));

	return (
		<div>
			<div className="container mt-5">
				<h1 className="link-danger">Personajes</h1>
				<div className="container principal">
					{store.personajes?.map(elemento =>
						<div key={elemento.uid} className="carta-personajes">
							<CartaPersonajes name={elemento.name} id={elemento.uid} />
						</div>
					)}
				</div>
			</div>

			<div className="container mt-5">
				<h1 className="link-danger">Planetas</h1>
				<div className="container principal">
					{store.planetas?.map(el =>
						<div key={el.uid} className="carta-personajes">
							<CartaPlanetas name={el.name} id={el.uid} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}



