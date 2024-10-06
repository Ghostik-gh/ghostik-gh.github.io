import { useNavigate } from 'react-router-dom';
import Button from './../../components/Button';
import { PageRoutes } from '../PageRoutes';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <h1>About Furniture Creater</h1>
        <Button label="Home" onClick={() => navigate(PageRoutes.Home)} />
      </div>
    </>
  );
}

export default AboutPage;
