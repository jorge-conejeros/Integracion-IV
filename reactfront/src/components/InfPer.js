import React from 'react';
import profile from '../assets/images/profile.png';

const InfPer = () => {
    return (
      <div>
      <div>
      <img src={profile} alt='Foto de Perfil' className='img_info'></img>
      </div>
      <br></br>
      <div className='tabla_info'>
      <table>
        <tbody>
          <tr> 
            <td><strong>Rut:</strong></td>
            <td>dato</td>
          </tr>
          <tr>
            <td><strong>Apellido Paterno:</strong></td>
            <td>apellido 1</td>
          </tr>
          <tr>
            <td><strong>Apellido Materno:</strong></td>
            <td>apellido 2</td>
          </tr>
          <tr>
            <td><strong>Nombres:</strong></td>
            <td>nombre 1 nombre 2</td>
          </tr>
          <tr>
            <td><strong>Fecha de Nac.:</strong></td>
            <td>dd-mm-yy</td>
          </tr>
          <tr>
            <td><strong>Sexo:</strong></td>
            <td>m f</td>
          </tr>
          <tr>
            <td><strong>E-Mail UCTemuco:</strong></td>
            <td>dato2000@alu.ucl.cl</td>
          </tr>
        </tbody>
        </table>
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
  
  export default InfPer