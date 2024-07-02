import React from 'react';
import Form from '../components/Auth/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Auth = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
};

export default Auth;