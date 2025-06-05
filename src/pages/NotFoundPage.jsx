/**
 * @file NotFoundPage is a simple 404 fallback component.
 * It displays a message and provides a button to navigate back to the homepage.
 */

import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center my-auto shadow-lg rounded p-20">
      <h1 className="text-2xl font-bold mb-5">
        404 - We were too lazy to make this page.. 🦥
      </h1>
      <Button
        text="Head back to Homepage"
        onClick={() => navigate('/')}
        variant="primary"
      />
    </div>
  );
}

export default NotFoundPage;
