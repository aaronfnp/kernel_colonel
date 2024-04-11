import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import GamePage from '../GamePage/GamePage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
          <GamePage />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
