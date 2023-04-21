import { useGlobalContext } from '../context';
import CartItem from './CartItem';
import { Container } from 'react-bootstrap';
const CartContainer = () => {
    const { cart, clearCart, totalCost } = useGlobalContext()

    const cartArray = Array.from(cart.entries());

    if (cartArray.length === 0) {
        return (
            <Container>
                <section className='cart'>
                    {/* cart header */}
                    <header>
                        <h2>your bag</h2>
                        <h4 className='empty-cart'>is currently empty</h4>
                    </header>
                </section>
            </Container>
        );
    }
    return (
        <Container>
            <section className='cart' style={{ maxWidth: "70%" }}>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                </header>
                {/* cart items */}
                <div>
                    {cartArray.map((cartItem) => {
                        const [id, item] = cartItem;
                        return <CartItem key={id} {...item} />;
                    })}
                </div>
                {/* cart footer */}
                <footer>
                    <hr />
                    <div>
                        <h4 className='cart-total'>
                            total <span>${totalCost.toFixed(2)}</span>
                        </h4>
                    </div>
                    <button
                        className='btn btn-hipster'
                        onClick={clearCart}
                    >
                        clear cart
                    </button>
                </footer>
            </section>
        </Container>
    );
};

export default CartContainer;