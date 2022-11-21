import React, { useState } from 'react';
import { MdLabelImportant } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const endpoint ='http://127.0.0.1:8000/api';

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [loginImput, setLogin] = useState({
    rut : '',
    password: '',
    error_list: [],
  });

  const handleImput = (e) => {
    e.persist();
    setLogin({...loginImput, [e.target.name]:e.target.value});
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      rut: loginImput.rut,
      password: loginImput.password,
    }
      axios.post(`${endpoint}/login`, data).then(res => {
        if (res.data.status === 200) 
        {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.studentname);
          MySwal.fire({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          });
          navigate('/login');
        }
        else if (res.data.status === 401) 
        {
          //MySwal("Warning", res.data.message, "warning");
          MySwal.fire({
            title: 'Warning',
            text: res.data.message,
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        }
        else 
        {
          setLogin({...loginImput, error_list: res.data.validation_errors});
        }
      });
  }

  return (
    <>
    <div className='login'>
      <div className="auth-form-container">
        <h2>Iniciar Sesion</h2>
        <form className="login-form" onSubmit={loginSubmit}>
          <label htmlFor="rut">Rut</label>
          <input value={loginImput.rut} onChange={handleImput} type="text" placeholder="22964859k" id="rut" name="rut" />
          <span>{loginImput.error_list.rut}</span>
          <label htmlFor="password">Contraseña</label>
          <input value={loginImput.password} onChange={handleImput} type="password" placeholder="********" id="password" name="password" />
          <span>{loginImput.error_list.password}</span>
          <button type="submit" className='botoningresar' >Ingresar</button>
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