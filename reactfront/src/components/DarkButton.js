import React from 'react'
import '../Styles/DarkButton.css'

function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}

const DarkButton = () => {
    return (
        <div className="container-switch">
        <button type="button" class="btn btn-dark" onclick="cambiarModo()">Oscuro / Claro</button>
        </div>
    )
  }
  
  export default DarkButton