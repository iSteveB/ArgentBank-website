import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../feature/authSlice';
import FormField from '../FormField';
import Button from '../Button';

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
			<FormField
				parentClassName={`input-wrapper ${error ? 'error' : ''}`}
				label='Email'
				inputType='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<FormField
				parentClassName={`input-wrapper ${error ? 'error' : ''}`}
				label='Password'
				inputType='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{status === 'failed' && <p className='error'>{error}</p>}
			<FormField
				parentClassName='input-remember'
				label='Remember me'
				inputType='checkbox'
				value={rememberMe}
				onChange={(e) => setRememberMe(e.target.checked)}
			/>
			<Button value='Sign In' type='submit' className='sign-in-button' />
		</form>
	);
};

export default Form;
