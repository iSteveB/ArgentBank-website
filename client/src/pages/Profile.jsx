import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../feature/userSlice';
import { useNavigate } from 'react-router-dom';
import EditForm from '../components/EditForm';

const Profile = () => {
	const [showEditForm, setShowEditForm] = useState(false);
	const token = useSelector((state) => state?.auth?.token);
	const user = useSelector((state) => state?.user?.user);
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

			<section className='account'>
				<div className='account-content-wrapper'>
					<h3 className='account-title'>
						Argent Bank Checking (x8349)
					</h3>
					<p className='account-amount'>$2,082.79</p>
					<p className='account-amount-description'>
						Available Balance
					</p>
				</div>
				<div className='account-content-wrapper cta'>
					<button className='transaction-button'>
						View transactions
					</button>
				</div>
			</section>
		</main>
	);
};

export default Profile;
