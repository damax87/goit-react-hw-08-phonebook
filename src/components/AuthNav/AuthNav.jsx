import { NavLink } from 'react-router-dom';

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

export const AuthNav = () => {
    return (
      <div>
        <NavLink exact style={styles.link} activeStyle={styles.activeLink} to="/register">
          Register
        </NavLink>
        <NavLink exact style={styles.link} activeStyle={styles.activeLink} to="/login">
          Log In
        </NavLink>
      </div>
    );
  };