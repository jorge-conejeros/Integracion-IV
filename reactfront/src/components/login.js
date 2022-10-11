import React, { useState } from 'react';
import { MdLabelImportant } from 'react-icons/md'
import '../Styles/Login.css'


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='login'>
      <div className="auth-form-container">
        <h2>Iniciar Sesion</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="rut">Rut</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="22964859k" id="rut" name="email" />
          <label htmlFor="password">Contraseña</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit" >Ingresar</button>
        </form>
      </div>
    </div>
    <div className='advertencias'>
      <h4>Consejos de Seguridad:</h4><br/>
      <span className='texto-adv'><MdLabelImportant/> &nbsp;Jamás te enviaremos, ni a nombre de la Universidad Católica de Temuco ni de nuestros administrativos, 
        correos electrónicos, mensajes de texto, 
        u otro tipo de mensajes electrónicos que soliciten información personal acerca de tu cuenta.</span>
        <br/>
        <br/>
      <span><MdLabelImportant />&nbsp;El entregar sus contraseñas a terceras personas permite el envío de correo masivo no deseado (SPAM), 
        provocando que nuestro dominio internet ingrese a los registros de listas negras nacionales e internacionales, 
        lo que afecta la imagen corporativa de la Universidad Católica de Temuco. Además, impide el flujo normal de información 
        con entidades educacionales, centros de investigación y empresas en general.</span>
    </div>
    </>
  )
}

export default Login