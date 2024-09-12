import './navegacion.css';

function Agregar() {
    return (
        <div className='section-agregar'>
            <h1>Agregar productos</h1>

            <div>
                <form className='formulario'>
                        <label className='label'>
                                <input type='text' placeholder='Nombre del producto'  className='input'></input>
                                <button type='submit' className='button'>Agregar producto</button>
                        </label>
                </form>
            </div>
            
            <div>
                <h2>Mis productos</h2>
            </div>
        </div>



  
    );
  }

  export default Agregar;