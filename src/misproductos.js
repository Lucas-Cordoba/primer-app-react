import React from 'react';
import './navegacion.css';

const Productos=({productos,eliminarProducto}) =>{
    
        return(
        
            <div className='section-productos'>
                <h2>Mis Productos</h2>
    
                <div className='contenedor-producto'>
                    <ul className='lista-productos'>
                        {productos && productos.length > 0 ? (
                            productos.map((producto,index) => (
                                <ol key={index} className='lista-productos'>
                                    <div className={index%2==0 ? 'amarillo' : 'azul'}>
                                        {index+1}{' - '}{producto}
                                        <button onClick={()=>eliminarProducto(index)} className='boton-eliminar'>Eliminar Producto</button>
                                    </div>
                                    
                                    
                                </ol>
                            ))
                        ) : (
                            <li>No hay productos.</li>
                        )}

                    </ul>
                </div>
            </div>
        );
    
    
    
      
       
      }

export default Productos;