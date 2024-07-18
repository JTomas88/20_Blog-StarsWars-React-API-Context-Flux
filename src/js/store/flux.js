const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {			
			baseUrl: "https://www.swapi.tech/api/",
			favoritos: [],
		},

		
		actions: {
			// Esta función recibe un personaje y obtiene los datos del store y se lo asigna a la variable creada "store".
			//Luego creamos una copia de lo que hay en favoritos (con ""...store.favoritos"), leemos la información del personaje (toda la información del personaje.)
			//y la pasamos al array favoritos (con "favoritos:"). Esto ultimo lo guardamos en la variable favoritos con el setStore. 
			anadirFavorito: (personaje) => {
				const store = getStore()
				 setStore({favoritos: [...store.favoritos, personaje]})
			},

			anadirFavoritoPlaneta: (planeta) => {
				const store = getStore ()
				setStore ({favoritos: [...store.favoritos, planeta]})
			},

			quitarFavorito: (personaje) => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter(elemento => elemento !== personaje);
				setStore({ ...store, favoritos: nuevosFavoritos });

			},

			obtenerCaracteres: async () => {
				const store = getStore();
				return await fetch(`${store.baseUrl}people/`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Respuesta del servicio: ', datosRespuesta);
					setStore  ({ personajes: datosRespuesta.results});
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},


			obtenerPersonaje: async (id) => {
				const store = getStore();
				return await fetch(`${store.baseUrl}people/${id}`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Datos del personaje: ', datosRespuesta.result);
					setStore  ({ personaje: datosRespuesta.result });
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},


			obtenerPlanetas: () => {
				const store = getStore();
				return fetch (`${store.baseUrl}planets/`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Respuesta del servicio obtenerPlanetas: ', datosRespuesta);
					setStore  ({ planetas: datosRespuesta.results });
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},

			obtenerPlaneta: async (id) => {
				const store = getStore();
				return await fetch(`${store.baseUrl}planets/${id}`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Datos del planeta: ', datosRespuesta.result);
					setStore  ({ planeta: datosRespuesta.result });
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},


			
		}
	};
};

export default getState;
