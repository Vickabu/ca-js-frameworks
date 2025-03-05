import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; 

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <CheckCircle size={60} className="text-green-500 mb-4 mx-auto" />
        <h1 className="text-2xl font-bold">Thank you for your purchase! 🎉</h1>
        <p className="text-gray-800 font-semibold mt-4">Your order number is: #123456789</p>
        <p className="text-gray-600 mt-2">
        We will email you an order confirmation with details and tracking  info.
        </p>

        <div className="mt-6 mx-auto">
          <Button text="Continue Shopping" onClick={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;



// function CheckoutSuccessPage() {
//   return <h1>Checkout Success Page</h1>;
// }

// export default CheckoutSuccessPage;