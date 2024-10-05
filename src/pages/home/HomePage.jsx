import { useNavigate } from 'react-router-dom';
import '../../components/Button';
import './HomePage.css';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Furniture</h1>
      <div className="card">
        <p>
          It's just <code>HomePage.jsx</code>
        </p>
        <Button
          label="About"
          onClick={() => navigate(PageRoutes.About)}
          color="blue"
          size="large"
        />
      </div>
    </>
  );
}

export default HomePage;
