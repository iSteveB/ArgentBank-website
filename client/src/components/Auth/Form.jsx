import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserId } from '../../features/userIdSlices';

const Form = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: username,
						password,
					}),
				}
			);

			const data = await response.json();

			if (!data.body) {
				setError(data.message);
			} else {
				setError(null);
				dispatch(getUserId(data.body.token));
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={`input-wrapper ${error ? 'error' : ''}`}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					autoComplete='username'
					onChange={(e) => setUsername(e.target.value)}
					value={username}
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
			{error && <p className='error'>{error}</p>}
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
