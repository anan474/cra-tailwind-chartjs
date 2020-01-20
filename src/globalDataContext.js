import React, { createContext, useReducer, useContext } from "react";

/* Action Types */
const ADD_FAKULTAS = "ADD_FAKULTAS";
const ADD_DOSEN = "ADD_DOSEN";

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const initialState = {
  doggie: {
    name: null,
    breed: null,
    isGoodBoy: true
  },
  statistikFakultas: [],
  semuadosen: []
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAKULTAS:
      return {
        ...state,
        statistikFakultas: [...state.statistikFakultas, action.payload]
      };
    case ADD_DOSEN:
      return {
        ...state,
        semuadosen: [...state.semuadosen, ...action.payload]
      };
    default:
      return state;
  }
};

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

/* 
Default export is a hook that provides a simple API for updating the global state. 
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const addFakultas = statistikFakultas => {
    dispatch({
      type: ADD_FAKULTAS,
      payload: statistikFakultas
    });
  };
  const addDosen = dosen => {
    dispatch({
      type: ADD_DOSEN,
      payload: dosen
    });
  };
  return {
    addFakultas,
    addDosen,
    semuadosen: { ...state.semuadosen },
    statistikFakultas: { ...state.statistikFakultas }
  };
};

export default useGlobalState;
