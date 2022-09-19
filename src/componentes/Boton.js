import React from 'react';
import '../hojas-de-estilos/Boton.css';

//Defino la estructura del componente
function Boton (props) {
		
	//IF esOperador es un boolean//
		const esOperador = valor => {
			return isNaN(valor) && (valor !=='.') && (valor !== '=');
		};

    return (
        <div
				className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
				onClick={() => props.manejarClic(props.children)}>
				{props.children}
        </div>
    ); 
	}
	
	export default Boton;