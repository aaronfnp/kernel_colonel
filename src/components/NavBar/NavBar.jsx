import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <nav>
<<<<<<< HEAD
      
=======
>>>>>>> 56b22d5b0f2078b19b9b376fab2b247d38bb4e7e
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  );
}