import { CLEAR_CART, REMOVE, INCREASE, DECREASE, ADD, LOADING, DISPLAY_BOOKS } from "./action";

const reducer = (state, action) => {
    if (action.type === LOADING) {
        return { ...state, loading: true }
    }

    if (action.type === DISPLAY_BOOKS) {
        const newBooks = new Map(action.payload.books.map(book => [book.id, book]))
        return { ...state, loading: false, books: newBooks };
    }

    if (action.type === ADD) {
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const newItem = state.books.get(itemID);
        newCart.set(itemID, newItem);
        return { ...state, cart: new Map(newCart) }
    }

    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }

    if (action.type === REMOVE) {
        const newCart = new Map(state.cart)
        newCart.delete(action.payload.id)
        return { ...state, cart: new Map(newCart) }
    }

    if (action.type === INCREASE) {
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const item = newCart.get(itemID)
        const newItem = { ...item, amount: item.amount + 1 }
        newCart.set(itemID, newItem)
        return { ...state, cart: new Map(newCart) };
    }

    if (action.type === DECREASE) {
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const item = newCart.get(itemID);
        if (item.amount === 1) {
            newCart.delete(itemID);
            return { ...state, cart: new Map(newCart) }
        }
        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemID, newItem);
        return { ...state, cart: newCart }
    }


}

export default reducer;