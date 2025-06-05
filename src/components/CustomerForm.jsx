/**
 * CustomerForm is a form component for capturing customer information like name, email, and address.
 *
 * @component
 * @param {Object} props
 * @param {{ fullName: string, email: string, address: string }} props.customer - The customer object with current values
 * @param {function} props.handleInputChange - Callback function triggered when an input field changes
 * @returns {JSX.Element}
 */

import PropTypes from 'prop-types';

export default function CustomerForm({ customer, handleInputChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Customer Information</h2>
      <label htmlFor="fullName" className="sr-only"></label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={customer.fullName}
        onChange={handleInputChange}
        className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <label htmlFor="email" className="sr-only"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        value={customer.email}
        onChange={handleInputChange}
        className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <label htmlFor="address" className="sr-only"></label>
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Shipping Address"
        value={customer.address}
        onChange={handleInputChange}
        className="border p-2 w-full mb-5 rounded shadow-lg"
      />
    </div>
  );
}

CustomerForm.propTypes = {
  customer: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
