import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPage } from './styles';
import Header from '../../components/reusableComponents/Header';

export default function index() {
  return (
    <ErrorPage>
      <Header />
      <div className="message">
        <h2>Pagina não encontrada</h2>
        <p>Infelizmente não localizamos essa pagina, o botão abaixo vai te retornar a pagina inicial</p>
        <Link className="shadow" to={'/'}>Voltar a pagina inicial</Link>
      </div>
    </ErrorPage>
  );
}
