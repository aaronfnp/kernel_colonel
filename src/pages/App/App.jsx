import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser, updateLocalUser } from '../../utilities/users-service';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import GamePage from '../GamePage/GamePage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    updateLocalUser(user);
  }, [user])

  return (
    <main className="App" style={{ height: '100vh' }}>
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
          <GamePage user={user} setUser={setUser} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
