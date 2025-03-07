
import PropTypes from "prop-types";

export default function PaymentForm({ customer, handleInputChange }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Information</h2>
      <input 
        type="text" name="cardNumber" placeholder="Card Number" value={customer.cardNumber} 
        onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <div className="flex gap-2 mb-3">
        <input 
          type="text" name="expiryDate" placeholder="MM/YY" value={customer.expiryDate} 
          onChange={handleInputChange} className="border p-2 w-1/2 rounded shadow-lg"
        />
        <input 
          type="text" name="cvv" placeholder="CVV" value={customer.cvv} 
          onChange={handleInputChange} className="border p-2 w-1/2 rounded shadow-lg"
        />
      </div>
      <input 
        type="text" name="cardOwner" placeholder="Cardholder's Name" value={customer.cardOwner} 
        onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
      />
    </div>
  );
}

PaymentForm.propTypes = {
  customer: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    cardOwner: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};