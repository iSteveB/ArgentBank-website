import React from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const token = useSelector((state) => state?.auth?.token);
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
								Name
							</Link>
							<Link className='main-nav-item' to='/'>
							<FontAwesomeIcon icon={faSignOutAlt} className='fa fa-sign-out' />
								Sign Out
							</Link>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
