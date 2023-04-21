import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer"
// import { bookstest } from "./constants/data";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, ADD, LOADING, DISPLAY_BOOKS } from "./action";
import { getTotals } from "./utils";

const url = process.env.REACT_APP_BASE_URL;


const AppContext = createContext();

const initialState = {
    loading: true,
    books: new Map(),
    cart: new Map()
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { totalAmount, totalCost } = getTotals(state.cart)

    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    const remove = (id) => {
        dispatch({ type: REMOVE, payload: { id } })
    }

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } })
    }

    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } })
    }

    const add = (id) => {
        dispatch({ type: ADD, payload: { id } })
    }

    const fetchBooks = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(url);
        const books = await response.json();
        dispatch({ type: DISPLAY_BOOKS, payload: { books } })
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, add, totalAmount, totalCost }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}