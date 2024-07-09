import React, { useEffect } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../feature/authSlice';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../feature/userSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state) => state?.auth?.token);
	const user = useSelector((state) => state?.user?.user);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
	};

	useEffect(() => {
		if (token) dispatch(getUser(token));
	}, [token, dispatch]);

	return (
		<header className='header'>
			<nav className='main-nav'>
				<Logo />
				<div>
					{!token && (
						<Link className='main-nav-item' to='/login'>
							<FontAwesomeIcon
								icon={faCircleUser}
								className='fa fa-user-circle'
							/>
							Sign In
						</Link>
					)}
					{token && (
						<div>
							<Link className='main-nav-item' to='/profile'>
								<FontAwesomeIcon
									icon={faCircleUser}
									className='fa fa-user-circle'
								/>
								{user?.firstName}
							</Link>
							<button
								className='main-nav-item logout'
								onClick={handleLogout}>
								<FontAwesomeIcon
									icon={faSignOutAlt}
									className='fa fa-sign-out'
									onClick={handleLogout}
								/>
								Sign Out
							</button>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
