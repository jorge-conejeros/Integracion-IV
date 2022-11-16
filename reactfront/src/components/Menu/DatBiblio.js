import React from 'react'

const DatBiblio = () => {
    return (
        <table className='table_A'>
            <thead>
              <tr>
                <td>Material</td>
                <td>Título</td>
                <td>Autor</td>
                <td>Fecha Préstamo</td>
                <td>Fecha Devolución</td>
                <td>Biblioteca</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">No tiene préstamos vigentes</td>
              </tr>
            </tbody>
          </table>
    )
  }
  
  export default DatBiblio