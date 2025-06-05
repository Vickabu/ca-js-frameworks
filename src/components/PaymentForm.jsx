import PropTypes from 'prop-types';

/**
 * PaymentForm component collects and handles credit card details such as card number,
 * expiry date, CVV, and cardholder's name. It relies on a controlled form model,
 * receiving current values via `customer` and updates via `handleInputChange`.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.customer - Object containing payment details.
 * @param {string} props.customer.cardNumber - The credit card number.
 * @param {string} props.customer.expiryDate - The card's expiration date.
 * @param {string} props.customer.cvv - The CVV code from the card.
 * @param {string} props.customer.cardOwner - The name of the cardholder.
 * @param {Function} props.handleInputChange - Callback to update input values.
 * @returns {JSX.Element} The rendered payment form.
 */

export default function PaymentForm({ customer, handleInputChange }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Information</h2>
      <label htmlFor="cardNumber" className="sr-only"></label>
      <input
        id="cardNumber"
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={customer.cardNumber}
        onChange={handleInputChange}
        className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <div className="flex gap-2 mb-3">
        <label htmlFor="date" className="sr-only"></label>
        <input
          id="date"
          type="text"
          name="expiryDate"
          placeholder="MM/YY"
          value={customer.expiryDate}
          onChange={handleInputChange}
          className="border p-2 w-1/2 rounded shadow-lg"
        />
        <label htmlFor="cvv" className="sr-only"></label>
        <input
          id="cvv"
          type="text"
          name="cvv"
          placeholder="CVV"
          value={customer.cvv}
          onChange={handleInputChange}
          className="border p-2 w-1/2 rounded shadow-lg"
        />
      </div>
      <label htmlFor="cardOwner" className="sr-only"></label>
      <input
        id="cardOwner"
        type="text"
        name="cardOwner"
        placeholder="Cardholder's Name"
        value={customer.cardOwner}
        onChange={handleInputChange}
        className="border p-2 w-full mb-3 rounded shadow-lg"
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
