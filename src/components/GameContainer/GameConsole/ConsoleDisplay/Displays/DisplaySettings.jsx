import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DisplaySettings({ user, setUser }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedUser, setEditedUser] = React.useState({ name: user.name, email: user.email });

  // toggling edit mode
  function toggleSettings() {
    setIsEditing(prevIsEditing => !prevIsEditing);
  }

  // handles changes, so input is editable
  function handleChange(event) {
    const { name, value } = event.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // if cancel button, resets info
  function handleCancel() {
    setEditedUser({
      name: user.name,
      email: user.email
    });

    setIsEditing(false);
  }

  // saves to base user state, mongoDB using editeduser state
  async function saveChanges() {
    try {
      // Your updateInfo function call goes here

      setUser(prevUser => ({
        ...prevUser,
        name: editedUser.name,
        email: editedUser.email
      }));

      setIsEditing(false);
    } catch (error) {
      console.error('Error saving:', error);
    }
  }

  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'rgba(135, 157, 31, 0.9)' }}>
      <CardContent>
        {isEditing ? (
          <>
            <Typography variant="h6" gutterBottom>
              Settings
            </Typography>
            <Typography variant="body1" gutterBottom>
              Username: <input name="name" value={editedUser.name} onChange={handleChange}></input>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: <input name="email" value={editedUser.email} onChange={handleChange}></input>
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Current Display: Settings
            </Typography>
            <Typography variant="body1" gutterBottom>
              Username: {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {user.email}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        {isEditing ? (
          <>
            <Button size="small" onClick={saveChanges}>Save Changes</Button>
            <Button size="small" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <Button size="small" onClick={toggleSettings}>Update Information</Button>
        )}
      </CardActions>
    </Card>
  );
}

export default DisplaySettings;
