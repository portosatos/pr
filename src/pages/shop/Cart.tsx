interface Item {
  id: number;
  thumbnailUrl: string;
  title: string;
  price: number;
}

const Cart = ({ cartItems }: { cartItems: Item[] }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const deliveryCost = 25; 
  const total = subtotal + deliveryCost;

  return (
    <div>
      <h2>Order Summary</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.thumbnailUrl} alt={`Thumbnail ${item.id}`} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="order-summary">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>Delivery:</strong> Kyrgyzstan (${deliveryCost.toFixed(2)})</p>
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
