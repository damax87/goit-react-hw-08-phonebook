import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wraper, Username, ButtonStyle } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wraper>
      <Username>Welcome, {user.name}</Username>
      <ButtonStyle type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyle>
    </Wraper>
  );
};