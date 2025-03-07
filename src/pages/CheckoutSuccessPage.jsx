import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import SuccessMessage from '../components/SuccessMessage';

const CheckoutSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber } = location.state || { orderNumber: '#000000' };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="bg-white p-20 rounded shadow-md text-center">
        <SuccessMessage orderNumber={orderNumber} />
        <div className="mt-6 mx-auto">
          <Button
            variant="primary"
            text="Continue Shopping"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
