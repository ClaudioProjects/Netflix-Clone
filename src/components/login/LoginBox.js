/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';

const Login = styled.form`
  * {
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  padding: 2vw 0;
  width: 30vw;
  background: rgba(0,0,0,0.8);
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 0.5vw;

  h2 {
    margin: 0 0 1vw 3vw;
    font-size: 2vw;
  }

  .input-login {
    outline: 0;
    border: 0;
    background: #333333;
    height: 3vw;
    width: 80%;
    margin: 0 auto;
    display: block;
    margin-bottom: 0.7vw;
    padding-left: 1vw;
    font-size: 1.2vw;
    border-radius: 0.3vw;
  }

  .btn-login {
    height: 4vw;
    width: 80%;
    margin: 2vw auto 0;
    display: block;
    background: #e50914;
    font-size: 1.2vw;
    cursor: pointer;
    border-radius: 0.3vw;
    border: 0;
  }

  .toggle-login {
    background: transparent;
    color: #CCCCCC;
    text-decoration: underline;
    margin: 1vw 0 0 3.2vw;
    font-size: 1vw;
  }

  .considerations-login {
    color: #DDDDDD;
    margin: 1vw 0 0 3.2vw;
    font-size: 1vw;
  }

  @media (max-width: 950px) {
    width: 92vw;
    padding: 4vw 0;

    h2 {
      font-size: 6vw;
      margin-bottom: 2vw;
    }

    .input-login {
      width: 95%;
      font-size: 3vw;
      height: 8vw;
      margin-bottom: 3vw;
    }

    .btn-login {
      font-size: 2.5vw;
      width: 95%;
      height: 8vw;
      margin-bottom: 3vw;
    }

    .toggle-login {
      font-size: 2.5vw;
      display: block;
    }

    .considerations-login {
      font-size: 2.5vw;
    }
  }
`;

export default function LoginBox(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function setEmailFnc(e) {
    setEmail(e.target.value);
  }

  function setPasswordFnc(e) {
    setPassword(e.target.value);
  }

  function setToggleLogin() {
    props.login ? props.props(false) : props.props(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login ? loginSubmit() : registerSubmit();
  }

  function registerSubmit() {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify({ email, password }));
    props.props(true);
  }

  function loginSubmit() {
    const user = JSON.parse(localStorage.getItem('users'));
    if (user.email === email && user.password === password) setValidate();
  }

  function setValidate() {
    localStorage.setItem('valid', JSON.stringify(true));
    props.setValidate(true);
  }

  return (
    <Login onSubmit={handleSubmit}>
      <h2>{props.login ? 'Login' : 'Cadastro'}</h2>
      <input className="input-login shadow" value={email} type="email" onChange={setEmailFnc} autoComplete="off" placeholder="Insira seu email"></input>
      <input className="input-login shadow" value={password} type="password" onChange={setPasswordFnc} autoComplete="off" placeholder="Insira sua senha"></input>
      <button className="btn-login shadow" type="submit">{props.login ? 'Entrar' : 'Cadastrar'}</button>
      <button type="button" className="toggle-login" onClick={setToggleLogin}>{props.login ? 'Não possui uma conta?' : 'Ja possui uma conta?'}</button>
      <button type="button" className="toggle-login" onClick={setValidate}>Clique aqui caso não queira criar uma conta</button>
      <p className="considerations-login">Esse é um projeto sem fins lucrativos</p>
    </Login>
  );
}
