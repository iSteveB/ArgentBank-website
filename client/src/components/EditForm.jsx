import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../feature/userSlice';
import { updateUser } from '../feature/updateUserSlice';
import FormField from './FormField';
import Button from './Button';

const EditForm = ({ setShowEditForm }) => {
	const token = useSelector((state) => state?.auth?.token);
	const user = useSelector((state) => state?.user?.user);
	const dispatch = useDispatch();
	const [updateUsername, setUpdateUsername] = useState(user?.userName);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUser({ token, userName: updateUsername }));
		dispatch(getUser(token));
		setShowEditForm(false);
	};

	return (
		<div>
			<h1>Edit user info</h1>
			<form onSubmit={handleSubmit} className='edit-form'>
				<FormField
					label='User name:'
					inputId='username'
					inputType='text'
					value={updateUsername}
					onChange={(e) => setUpdateUsername(e.target.value)}
					isDisabled={false}
				/>
				<FormField
					label='First name:'
					inputId='firstName'
					inputType='text'
					value={user?.firstName}
					onChange={(e) => setUpdateUsername(e.target.value)}
					isDisabled={true}
				/>
				<FormField
					label='Last name:'
					inputId='lastName'
					inputType='text'
					value={user?.lastName}
					onChange={(e) => setUpdateUsername(e.target.value)}
					isDisabled={true}
				/>
				<div>
					<Button
						value='Save'
						type='submit'
						className='edit-button'
					/>
					<Button
						value='Cancel'
						type='button'
						className='edit-button'
						onClick={() => setShowEditForm(false)}
					/>
				</div>
			</form>
		</div>
	);
};

export default EditForm;
