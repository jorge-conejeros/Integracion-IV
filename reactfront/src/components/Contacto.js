import React from 'react'
import '../Styles/Contacto.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs"

const Contacto = () => {
  return (
    <div className="container" id='contact-div'>
      <div className="row" id='columnas'>
        <div className="col">
          <h4>Direcciones&nbsp;<span id='second-word'>Campus</span></h4>
          <ul>
            <li>CAMPUS SAN FRANCISCO</li>
            <li> <FaMapMarkerAlt /> Manuel Montt 56</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 205 470</li>
          </ul>
          <ul>
            <li>CAMPUS SAN JUAN PABLO II</li>
            <li> <FaMapMarkerAlt /> Rudecindo Ortega 02950</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 553 978</li>
          </ul>
        </div>
        <div className="col">
          <h4>&nbsp;</h4>
          <ul>
            <li>CAMPUS MENCHACA LIRA</li>
            <li> <FaMapMarkerAlt /> Avenida Alemania 0422</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 203 822</li>
          </ul>
          <ul>
            <li>CAMPUS LUIS RIVAS DEL CANTO</li>
            <li> <FaMapMarkerAlt /> Callejón Las Mariposas s/n</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 205 596</li>
          </ul>
        </div>
        <div className="col">
          <h4>Telefonos&nbsp;<span id='second-word'>Utilidad</span></h4>
          <ul>
            <li>PRENSA INSTITUCIONAL </li>
            <li> <FaMapMarkerAlt /> Avenida Alemania 0211</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 205 428</li>
          </ul>
          <ul>
            <li>BIENESTAR ESTUDIANTIL</li>
            <li> <FaMapMarkerAlt />Manuel Montt 56</li>
            <li> <BsTelephoneFill />Fono: +56 45 2 205 424</li>
          </ul>
        </div>
        <div className="col">
          <h4>&nbsp;</h4>
          <ul>
            <li>AULA MAGNA</li>
            <li> <FaMapMarkerAlt /> Manuel Montt 56</li>
            <li> <BsTelephoneFill /> Fono: +56 45 2 205 471</li>
          </ul>
          <ul>
            <li>MESA CENTRAL</li>
            <li> <FaMapMarkerAlt />Prieto Norte 371</li>
            <li> <BsTelephoneFill />Fono: +56 45 2 205 205</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Contacto