import { useGlobalContext } from "../context";

const CartItem = ({ _id, title, img_url, price, amount }) => {
  const { remove } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img_url} alt={title} />
      <div>
        <h4>{title}</h4>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(_id)}>
          remove
        </button>
      </div>
      <div>
        <span className="amount">{amount}</span>
      </div>
    </article>
  );
};

export default CartItem;
