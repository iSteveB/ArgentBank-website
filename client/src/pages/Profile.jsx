import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../feature/userSlice';
import { useNavigate } from 'react-router-dom';
import EditForm from '../components/EditForm';
import Card from '../components/Card';

const Profile = () => {
	const [showEditForm, setShowEditForm] = useState(false);
	const token = useSelector((state) => state.auth?.token);
	const user = useSelector((state) => state.user?.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate('/login');
		} else {
			dispatch(getUser(token));
		}
	}, [token, showEditForm, navigate, dispatch]);

	return (
		<main className='main bg-dark'>
			<div className='profil-header'>
				{showEditForm ? (
					<EditForm setShowEditForm={setShowEditForm} />
				) : (
					<>
						<h1>
							Welcome back
							<br />
							{user?.firstName} {user?.lastName}
						</h1>
						<button
							className='edit-button'
							onClick={() => setShowEditForm(true)}>
							Edit Name
						</button>
					</>
				)}
			</div>
			<h2 className='sr-only'>Accounts</h2>
			<Card />
			<Card />
			<Card />
		</main>
	);
};

export default Profile;
