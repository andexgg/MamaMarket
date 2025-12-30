const products = [
  { id: 1, name: "Organic Basket", price: 800, image: "/products/product1.jpg" },
  { id: 2, name: "Premium Groceries", price: 950, image: "/products/product2.jpg" },
  { id: 3, name: "Mama Special Pack", price: 900, image: "/products/product3.jpg" }
];

export default function ProductGrid({ addToCart }) {
  return (
    <div className="grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <details>
            <summary>Read More</summary>
            <p>High quality products curated by Mama Market.</p>
          </details>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
