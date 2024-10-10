import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importamos el componente saludo.js
import Saludo from './componentes/saludo';
import Metodo from './componentes/metodo';
import DobleNumero from './componentes/DobleNumero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo nombre="Paco de Lucía" edad="77" />
    <Metodo />
    <DobleNumero />
    <App />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
