import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function DisplayStats({ user }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'rgba(135, 157, 31, 0.7)' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Stats
        </Typography>
        <Typography variant="h5" component="div">
          Total Corn Earned: {user.totalScore}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Total Time Wasted: 0, it's not wasted
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DisplayStats;
