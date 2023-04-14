import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#2a363b',
    },
    activeLink: {
        color: '#e84a5f',
    }
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink exact style={styles.link} activeStyle={styles.activeLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink exact style={styles.link} activeStyle={styles.activeLink} to="/contacts">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};