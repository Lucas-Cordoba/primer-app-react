import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import AgregarProducto from './agregar';
import Productos  from './misproductos';
import reportWebVitals from './reportWebVitals';


const App = ()=>{
  const [productos, setProducto] = useState([]);

  const agregarProducto = (producto) =>{
    setProducto([...productos,producto]);
  };

  const eliminarProducto = (index) =>{
    const nuevaLista = productos.filter((_,i) => i !==index);
    setProducto(nuevaLista);

  }

  return(
    <>
    <Header/>
    <AgregarProducto agregarproducto={agregarProducto}/>
    <Productos productos={productos} eliminarProducto={eliminarProducto}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>


);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
