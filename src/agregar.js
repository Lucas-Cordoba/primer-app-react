import './navegacion.css';

function Agregar() {
    return (
        <div className='section-agregar'>
            <h1>Agregar productos</h1>

            <div className='formulario'>
                <form className='formulario'>
                    <label>
                        <input type='text'></input>
                        <button>Agregar producto</button>
                    </label>
                </form>
            </div>
            
        </div>


  
    );
  }

  export default Agregar;