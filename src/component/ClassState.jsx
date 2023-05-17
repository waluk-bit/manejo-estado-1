import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,

    };
  }
  render() {
    return (
      <>
        <div className="useReducer">
          <h2>Eliminar UseReducer</h2>
          <p>
            Por favor, escribe el código de seguridad para comprobar que quieres
            eliminar.
          </p>
          {this.state.error && (
            <p>El codigo es Incorrecto</p>
          )}
          <div className="inputContainer">
            <input type="text" placeholder="Código de seguridad" />
            <button onClick={()=> this.setState(prevState => ({error: !prevState.error}))} >Comprobar</button>
          </div>
        </div>
      </>
    );
  }
}

export { ClassState };
