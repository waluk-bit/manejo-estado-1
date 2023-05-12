import './App.css';

function App() {
  return (
    <>
        <div className='useState'>
          <h2>Eliminar UseState</h2>
          <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
          <span>Error...</span>
          <div className='inputContainer'>
          <input type="text" placeholder='Código de seguridad' />
          <button>Comprobar</button>
          </div>
        </div>
        <div className='useReducer'>
          <h2>Eliminar UseReducer</h2>
          <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
          <span>Error...</span>
          <div className='inputContainer'>
          <input type="text" placeholder='Código de seguridad' />
          <button>Comprobar</button>
          </div>
        </div>
    </>
  )
}

export default App;
