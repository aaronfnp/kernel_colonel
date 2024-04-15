<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { loadLB } from '../../../../../utilities/users-api';
function DisplayLeaderBoard() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const users = await loadLB();
        setLeaderBoard(users);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderBoard();
  }, []);

  return (
    <div>
      <h4>Current Display: LeaderBoard</h4>
      <div>
        {leaderBoard.map((user, idx) => (
          <>
            <small key={user.id}>{user.name}: {user.score} </small>
          </>
        ))}
      </div>
    </div>
  );
}

=======
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { loadLB } from '../../../../../utilities/users-api';
function DisplayLeaderBoard() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const users = await loadLB();
        setLeaderBoard(users);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderBoard();
  }, []);

  return (
    <div>
      <h4>Current Display: LeaderBoard</h4>
      <div>
        {leaderBoard.map((user, idx) => (
          <>
            <small key={user.id}>{user.name}: {user.totalScore} </small>
          </>
        ))}
      </div>
    </div>
  );
}

>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
export default DisplayLeaderBoard;