import React, { useEffect, useReducer } from "react";
import "./useStateStyle.css";
const SECURITY_CODE = "a";

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Action Creators
  const onConfirm = () => {
    dispatch({
      type: actionTypes.confirm,
    });
  };
  const onError = () => {
    dispatch({
      type: actionTypes.error,
    });
  };
  const onWrite = ({target:{value}}) => {
    dispatch({
      type: actionTypes.onWrite,
      payload: value,
    });
  };
  const onCheck = () => {
    dispatch({
      type: actionTypes.check,
    });
  };
  const onDelete = () => {
    dispatch({
      type: actionTypes.onDelete,
    });
  };
  const onReset = () => {
    dispatch({
      type: actionTypes.onReset,
    });
  };
  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
        <div className="inputContainer">
          <input
            type="text"
            disabled={state.loading}
            placeholder="Código de seguridad"
            value={state.value}
            //onChange={
            // (e) => onWrite(e.target.value)
            //(e) => onWrite(e)
            //}
            onChange={onWrite}
          />
          <button
            disabled={state.loading}
            onClick={onCheck}
            //()=>setLoading(true);
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
            <button onClick={onDelete}>Si, eliminar</button>
            <button onClick={onReset}>No, volver</button>
          </div>
        </div>
      </>
    );
    //<button onClick={() => onDelete()}>Si, eliminar</button>
  } else {
    return (
      <>
        <div className="useState">
          <p>Eliminado con exito</p>

          <button className="buttons" onClick={onReset}>
            volver atras
          </button>
        </div>
      </>
    );
  }
};

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};
/* Action types */
const actionTypes = {
  confirm: "COMFIRM",
  error: "ERROR",
  check: "CHECK",
  onDelete: "ON-DELETE",
  onReset: "ON-RESET",
  onWrite: "WRITE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.onWrite]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.onDelete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.onReset]: {
    ...state,
    deleted: false,
    confirmed: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
