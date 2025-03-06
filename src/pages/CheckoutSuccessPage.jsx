import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SuccessMessage from "../components/SuccessMessage"; 

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="bg-white p-20 rounded shadow-md text-center">
        <SuccessMessage orderNumber="#123456789" />
        <div className="mt-6 mx-auto">
          <Button className="bg-red-600" text="Continue Shopping" onClick={() => navigate("/") }/>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;


