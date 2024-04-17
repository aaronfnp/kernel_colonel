import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import PropTypes from 'prop-types';
export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <nav>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
