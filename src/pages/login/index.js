/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginBox from '../../components/login/LoginBox';
import Footer from '../../components/reusableComponents/Footer';
import Loading from '../../components/reusableComponents/Loading';

const Login = styled.div`
  overflow: hidden;
  background: #141414;
  position: relative;
  color: #FFF;

  .filter-black {
    background: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .login-logo {
    top: 1vw;
    left: 1vw;
    position: absolute;
    width: 10vw;
    z-index: 1;
  }

  .login-box {
    height: 50vw;
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 0.5vw;
  }

  .footer-login {
    position: relative;
  }
`;

export default function index() {
  const history = useNavigate();
  const [isLogin, setIsLogin] = React.useState(true);
  const [validate, setValidate] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  
  function setLogin(val) {
    setIsLogin(val);
  }

  function setValidadeFnc(val) {
    setValidate(val);
  }

  function setTimeLoad(time) {
    setTimeout(() => {
      setLoad(true);
    }, time);
  }

  function isValid() {
    if (localStorage.getItem('valid')) return true;
    return false;
  }

  React.useEffect(() => {
    setTimeLoad(500);
    if (isValid()) history('/');
    if (validate) history('/');
  }, [isLogin, validate, load]);

  return (
    <Login>
      {!load && <Loading></Loading>}
      <img className="login-logo" src="/images/logo.png" alt="logo img"></img>
      <img src="/images/netflix-bg.jpg" alt="Background login"></img>
      <div className="filter-black"></div>
      {isLogin ? <LoginBox props={setLogin} login={isLogin} setValidate={setValidadeFnc} /> : <LoginBox props={setLogin} login={isLogin} setValidate={setValidadeFnc} />}
      <Footer className="footer-login"></Footer>
    </Login>
  );
}
