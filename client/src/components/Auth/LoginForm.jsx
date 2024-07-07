import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../feature/authSlice';

const Form = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const { status, error } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (status === 'succeeded') {
			navigate('/profile');
		}
	}, [status]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={`input-wrapper ${error ? 'error' : ''}`}>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					id='email'
					autoComplete='email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div className={`input-wrapper ${error ? 'error' : ''}`}>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					autoComplete='current-password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>
			{status === 'failed' && <p className='error'>{error}</p>}
			<div className='input-remember'>
				<input
					type='checkbox'
					id='remember-me'
					onChange={(e) => setRememberMe(e.target.checked)}
					checked={rememberMe}
				/>
				<label htmlFor='remember-me'>Remember me</label>
			</div>
			<button type='submit' className='sign-in-button'>
				Sign In
			</button>
		</form>
	);
};

export default Form;
