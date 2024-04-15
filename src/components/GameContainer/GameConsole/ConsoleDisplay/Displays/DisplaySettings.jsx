import React, { useState } from 'react';
import { updateInfo } from '../../../../../utilities/users-api';


function DisplaySettings({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: user.name, email: user.email})

  // toggling edit mode
  function toggleSettings() {
    setIsEditing(prevIsEditing => !prevIsEditing);
  }

  // handles changes, so input is editable
  function handleChange(event) {
    const {name, value} = event.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // if cancel button, resets info
  function handleCancel() {
    setEditedUser({
      name: user.name,
      email: user.email
    });
  
    setIsEditing(false);
  }
  
  //saves to base user state, mongoDB using editeduser state
  async function saveChanges() {
    try {
      await updateInfo(user._id, editedUser.name, editedUser.email)
      setUser(prevUser => ({
        ...prevUser,
        name: editedUser.name,
        email: editedUser.email
      }));

      setIsEditing(false);

      await console.log(user);
    } catch (error) {
      console.error('Error saving:', error);
    }
  }

  return (
    <div>
      {isEditing ? (
        <>
          <h4>Current Display: Settings</h4>
          Username:<input name="name" value={editedUser.name} onChange={handleChange}></input>
          <br></br>
          Email:<input name="email" value={editedUser.email} onChange={handleChange}></input>
          <br></br>
          <button onClick={saveChanges}>Save Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h4>Current Display: Settings</h4>
          <div>Username: {user.name}</div>
          <div>Email: {user.email}</div>
          <button onClick={toggleSettings}>Update Information</button>
        </>
      )}
    </div>
  );
}

export default DisplaySettings;
