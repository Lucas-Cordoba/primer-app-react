import React from 'react';
import './navegacion.css';

const Productos=({productos}) =>{
    function Productos() {

        return(
            <section className='section-productos'>
                <h2>Mis Productos</h2>
    
                <div>
                    <ul className='lista-productos'>
                        {productos.length > 0 ? (
                            productos.map((producto,index) => (
                                <li key={index} className='producto-item'>
                                    {producto}
                                    
                                </li>
                            ))
                        ) : (
                            <li>No hay productos.</li>
                        )}

                    </ul>
                </div>
            </section>
        );
    
    
    
      
       
      }
    

}

export default Productos;