import React, { useState } from 'react';
import './navegacion.css';

const Productos=({productos,eliminarProducto,editarProductos}) =>{
    const [editIndex,setEditIndex] = useState(null);
    const [editValue,setEditValue] = useState('');

    const handleEditClick = (index,value) =>{
        setEditIndex(index);
        setEditValue(value);
    };

    const handleEditChange =(e) =>{
        setEditValue(e.target.value);
    };
    
    const handleEditSubmit = (e) =>{
        e.preventDefault();
        editarProductos(editIndex,editValue);
        setEditIndex(null);
        setEditValue('');
    };

    const handleDelete = (index) =>{
        eliminarProducto(index);
        if(index === editIndex){
            setEditIndex(null);
            setEditValue('');
        }
    };




        return(
        
            <div className='section-productos'>
                <h2>Mis Productos</h2>
    
                <div className='contenedor-producto'>
                    <ul className='lista-productos'>
                        {productos && productos.length > 0 ? (
                            productos.map((producto,index) => (
                                <ol key={index} className='lista-productos'>
                                    <div className={index%2===0 ? 'amarillo' : 'celeste'}>
                                        {index+1}{' - '}{producto}
                                        <button onClick={()=>handleDelete(index)} className='boton-eliminar'>Eliminar Producto</button>
                                        <button onClick={()=>handleEditClick(index,producto)} className='boton-editar'>Editar Producto</button>
                                    </div>
                                    
                                    
                                </ol>
                            ))
                        ) : (
                            <li>No hay productos.</li>
                        )}

                    </ul>
                </div>

                {editIndex !== null && (
                    <form onSubmit={handleEditSubmit} className='formulario-editar'>
                        <input type='text' value={editValue} onChange={handleEditChange} className='input'/>
                        <button type='submit' className='boton-editar'>Guardar Cambios</button>
                    </form>
                )}
            </div>
        );
    
    
    
      
       
      }

export default Productos;