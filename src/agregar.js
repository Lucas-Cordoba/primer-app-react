import './navegacion.css';
import React, {useState} from 'react';

const  AgregarProducto = ({agregarproducto}) => {
    [producto,setProducto]=useState('');

    const handleChange= (e) => {
        setProducto(e.target.value);
    };
};

const handleSubmit = (e) =>{
    e.preventDefault();
    if(product.trim()){
        agregarProducto(producto);
        setProducto('');
    }
}

function Agregar() {
    return (
        <div className='section-agregar'>
            <h1>Agregar productos</h1>

            <div>
                <form className='formulario' onSubmit={handleSubmit}>
                        <label className='label'>
                                <input type='text' placeholder='Nombre del producto'  className='input' value={producto} onChange={handleChange}></input>
                                <button type='submit' className='button'>Agregar producto</button>
                        </label>
                </form>
            </div>
        </div>
  
    );
  }

  export default Agregar;