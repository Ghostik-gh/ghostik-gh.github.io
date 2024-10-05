import { useNavigate } from 'react-router-dom';
import '../../components/Button';
import './NotFoundPage.css';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        {/* <code>{location.pathname}</code> */}
        <p>Page not found - the path, did not match any React Router routes.</p>
        <Button
          label="pls go to home page"
          onClick={() => navigate(PageRoutes.Home)}
          color="blue"
          size="large"
        />
      </div>
    </>
  );
}

export default NotFoundPage;
