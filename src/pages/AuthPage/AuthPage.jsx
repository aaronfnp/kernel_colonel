import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import PropTypes from 'prop-types';  // Import PropTypes

function AuthPage({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}

AuthPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default AuthPage;
