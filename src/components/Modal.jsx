import { bankDetails } from '../data/gifts';

function Modal({ gift, onClose }) {
  if (!gift) return null;

  const fullReference = `${bankDetails.reference}${gift.name}`;

  const formatPrice = (price) => {
    return price.toLocaleString('es-AR');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>Gracias por tu regalo!</h2>
        <p className="modal-gift-name">Elegiste: <strong>{gift.name}</strong></p>
        <p className="modal-gift-price">Monto: <strong>${formatPrice(gift.price)}</strong></p>

        <div className="bank-details">
          <h3>Datos para Transferencia</h3>
          <div className="bank-row">
            <span className="bank-label">Titular:</span>
            <span className="bank-value">{bankDetails.accountHolder}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">CUIT:</span>
            <span className="bank-value">{bankDetails.cuit}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">CVU:</span>
            <span className="bank-value">{bankDetails.cvu}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">Alias:</span>
            <span className="bank-value">{bankDetails.alias}</span>
          </div>
          <div className="bank-row">
            <span className="bank-label">Referencia:</span>
            <span className="bank-value reference">{fullReference}</span>
          </div>
        </div>

        <p className="modal-note">
          Por favor incluí la referencia así sabemos qué regalo elegiste!
        </p>
      </div>
    </div>
  );
}

export default Modal;
