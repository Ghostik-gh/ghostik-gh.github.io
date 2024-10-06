import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';
import SettingButton from '../../components/SettingsButton';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <h1>Furniture</h1>
        <p>
          It's just <code>HomePage.jsx</code>
        </p>
        <SettingButton />
        <Button label="About" onClick={() => navigate(PageRoutes.About)} />
      </div>
    </>
  );
}

export default HomePage;
