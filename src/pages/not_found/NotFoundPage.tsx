import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { PageRoutes } from '../PageRoutes';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <p>
          Page not found - the path <code>{location.pathname}</code>, did not
          match any routes.
        </p>
        <Button
          label="pls go to home page"
          onClick={() => navigate(PageRoutes.Home)}
        />
      </div>
    </>
  );
}

export default NotFoundPage;
