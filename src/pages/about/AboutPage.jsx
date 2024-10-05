import { useNavigate } from 'react-router-dom';
import './AboutPage.css';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>About Furniture Creater</h1>
      <div className="card">
        <Button
          label="Home"
          onClick={() => navigate(PageRoutes.Home)}
          color="blue"
          size="large"
        />
      </div>
    </>
  );
}

export default AboutPage;
