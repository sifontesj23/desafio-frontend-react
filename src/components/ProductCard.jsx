export default function ProductCard({ image, title, price }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Comprar</button>
      </div>
    );
  }