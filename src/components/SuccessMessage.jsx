import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

const SuccessMessage = ({ orderNumber }) => {
  return (
    <div className="text-center">
      <CheckCircle size={60} className="text-green-500 mb-4 mx-auto" />
      <h1 className="text-2xl font-bold">Thank you for your purchase! 🎉</h1>
      <p className="text-gray-800 font-semibold mt-4">Your order number is: {orderNumber}</p>
      <p className="text-gray-600 mt-2">
      One day, we will email you an order confirmation with all the details and tracking info – we just need to figure out how to do that first!
      </p>
    </div>
  );
};

SuccessMessage.propTypes = {
  orderNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SuccessMessage;