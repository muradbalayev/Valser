import NotFound from '@/pages/NotFound';
import { useSelector } from 'react-redux';

const ProtectedAdminRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);
  // const location = useLocation();
console.log(accessToken)
  if (!accessToken) {
    return <NotFound  />;
  }


  return children;
};

export default ProtectedAdminRoute;