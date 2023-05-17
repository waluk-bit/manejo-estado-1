import React, { useEffect, useState } from "react";
import "./useStateStyle.css";
const SECURITY_CODE = "a";

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });
  /* const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  //ESTADO SEMI DECLARATIVO
  const [loading, setLoading] = useState(false); */
  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };
  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };
  const onWrite = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };
  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };
  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };
  const onReset = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false,
      value: "",
    });
  };
  
  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
          //setError(false);
          //setLoading(false);
        } else {
          onError();
          //setError(true);
          //setLoading(false);
        }

        console.log("terminando la validacion");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div className="useState">
        <h2>Eliminar {name}</h2>
        <p>
          Por favor, escribe el código de seguridad para comprobar que quieres
          eliminar.
        </p>
        <div className="loading-error">
          {state.error && !state.loading && <p>Error: Incorrect Code</p>}
          {state.loading && <p>Cargando...</p>}
        </div>
        <div
          className="inputContainer"
          value={state.value}
          onChange={
            (e) => onWrite(e)
            //setValue(e.target.value);
          }
        >
          <input
            type="text"
            disabled={state.loading}
            placeholder="Código de seguridad"
          />
          <button
            disabled={state.loading}
            onClick={() => onCheck()
              //setLoading(true);
            }
          >
            Comprobar
          </button>
        </div>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <div className="useState">
          <h2>Eliminar {name}</h2>
          <p>¿Seguro que quieres eliminar {name}</p>
          <div className="buttons">
            <button onClick={() => onDelete()}>Si, eliminar</button>
            <button onClick={() => onReset()}>No, volver</button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="useState">
          <p>Eliminado con exito</p>

          <button
            className="buttons"
            onClick={() => onReset()}
  
            /*semi declarativo
            onClick={() => {
              IMPERATIVO
              setState({
                ...state,
                confirmed: false,
                deleted: false,
                value: "",
              });
            }}*/
          >
            volver atras
          </button>
        </div>
      </>
    );
  }
};

export { UseState };
