import './navegacion.css';
import React, {useState} from 'react';

const  AgregarProducto = ({agregarproducto}) => {
    const [producto,setProducto]=useState('');
    const [error,setError]=useState('');

    const handleChange= (e) => {
        setProducto(e.target.value);

        if(error){
            setError('')
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(producto.trim()){
            agregarproducto(producto);
            setProducto('');
        }else{
            setError('El nombre del producto no puede estar vacío.')
        }
    }

    
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
                {error && <p className='error'>{error}</p>}
            </div>
        </div>
  
    );
};



 


  export default AgregarProducto;