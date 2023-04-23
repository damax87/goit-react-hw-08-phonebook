import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'components/hooks';
import { AppBarHeader } from "./AppBar.style";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <AppBarHeader>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarHeader>
    );
  };