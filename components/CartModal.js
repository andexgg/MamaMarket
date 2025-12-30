export default function CartModal({ cart, onClose }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  const freeShippingThreshold = 2500;
  const remaining = freeShippingThreshold - total;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your Cart</h2>

        {cart.map((item, i) => (
          <p key={i}>{item.name} - ${item.price}</p>
        ))}

        <hr />
        <h3>Total: ${total}</h3>

        {total >= freeShippingThreshold ? (
          <p className="success">
            🎉 Congratulations, your order is eligible for free delivery!
          </p>
        ) : (
          <p className="warning">
            Add ${remaining} more to get free shipping to your address
          </p>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
