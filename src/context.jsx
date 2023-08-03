import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, ADD } from "./action";
import { getTotals } from "./utils";

const url = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

const initialState = {
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const add = (book) => {
    dispatch({ type: ADD, payload: { book } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        add,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
