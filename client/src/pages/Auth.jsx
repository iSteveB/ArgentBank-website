import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Auth = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
};

export default Auth;