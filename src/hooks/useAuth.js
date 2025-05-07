import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  login as loginAction, 
  logout as logoutAction,
  selectCurrentUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError
} from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const login = async (credentials) => {
    const resultAction = await dispatch(loginAction(credentials));
    if (loginAction.fulfilled.match(resultAction)) {
      // On successful login, navigate based on user role
      const role = resultAction.payload.user.role;
      if (role === 'super_admin') {
        navigate('/super-admin/dashboard');
      } else if (role === 'institute_admin') {
        navigate('/institute/dashboard');
      } else if (role === 'tutor') {
        navigate('/tutor/dashboard');
      } else if (role === 'student') {
        navigate('/student/dashboard');
      }
      return true;
    }
    return false;
  };

  const logout = async () => {
    await dispatch(logoutAction());
    navigate('/login');
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
  };
};

export default useAuth;