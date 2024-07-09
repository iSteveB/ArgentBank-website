import React, { useEffect } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Auth = () => {
	const navigate = useNavigate();
	const token = useSelector((state) => state?.auth?.token);

	useEffect(() => {
		if (token) {
			navigate('/profile');
		}
	}, [token, navigate]);
	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' />
				<h1>Sign In</h1>
				<LoginForm />
			</section>
		</main>
	);
};

export default Auth;
