import React, { useEffect, useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
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
    <Box sx={{ width: '100%' }}>
      <h4>LeaderBoard</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {leaderBoard.map((user, idx) => (
          <Grid item xs={6} key={user.id}>
            <Paper sx={{ p: 1, textAlign: 'center', color: 'text.secondary', bgcolor: 'background.paper' }}>
              {idx + 1}. {user.name}: {user.totalScore}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DisplayLeaderBoard;
