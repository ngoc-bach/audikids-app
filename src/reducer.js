import { CLEAR_CART, REMOVE, ADD } from "./action";

const reducer = (state, action) => {
  if (action.type === ADD) {
    const newCart = new Map(state.cart);
    const item = action.payload.book;
    newCart.set(item._id, item);
    return { ...state, cart: new Map(newCart) };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: new Map(newCart) };
  }
};

export default reducer;
