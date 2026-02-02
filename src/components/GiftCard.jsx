function GiftCard({ gift, onSelect }) {
  const formatPrice = (price) => {
    return price.toLocaleString('es-AR');
  };

  return (
    <div className="gift-card" onClick={() => onSelect(gift)}>
      <div className="gift-image">
        <img src={gift.image} alt={gift.name} />
        <span className="gift-category">{gift.category}</span>
      </div>
      <div className="gift-info">
        <h3>{gift.name}</h3>
        <p>{gift.description}</p>
        <div className="gift-price">${formatPrice(gift.price)}</div>
      </div>
    </div>
  );
}

export default GiftCard;
