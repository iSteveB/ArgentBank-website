import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../feature/updateUserSlice';

const EditForm = ({ setShowEditForm }) => {
  const token = useSelector((state) => state?.auth?.token);
	const user = useSelector((state) => state?.user?.user);
	const dispatch = useDispatch();
	const [updateUsername, setUpdateUsername] = useState(user?.userName);

	const handleSubmit = (e) => {
		e.preventDefault();
    dispatch(updateUser({ token, userName: updateUsername }));
    setShowEditForm(false);
	};

	return (
		<div>
			<h1>Edit user info</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>User name:</label>
					<input
						type='text'
						value={updateUsername}
						onChange={(e) => setUpdateUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>First name:</label>
					<input type='text' value={user?.firstName} disabled />
				</div>
				<div>
					<label>Last name:</label>
					<input type='text' value={user?.lastName} disabled />
				</div>

				<button type='submit' className='edit-button'>Save</button>
				<button type='button' className='edit-button' onClick={() => setShowEditForm(false)}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default EditForm;
