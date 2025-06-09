import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearToken, clearId } from '@/state/authSlice';
import { clearUserInfo } from '@/state/userSlice';

export const logOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(clearToken());
  dispatch(clearId());
  dispatch(clearUserInfo());
  navigate('/');
};
