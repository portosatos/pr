import { useCart } from '../../components/CartContext';

import styles from './Cart.module.scss'

const Cart = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const deliveryCost = 25;
  const total = subtotal + deliveryCost;

  return (
    <div>
      <h2>Order Summary</h2>
      <ul className={styles.cardList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img src={item.thumbnailUrl} alt={`Thumbnail ${item.id}`} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.orderSummary}>
        <p>
          <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
        </p>
        <p>
          <strong>Delivery:</strong> Kyrgyzstan (${deliveryCost.toFixed(2)})
        </p>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
