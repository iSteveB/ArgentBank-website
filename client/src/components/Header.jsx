import React from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<nav className='main-nav'>
				<Logo />
				<div>
					<Link className='main-nav-item' to='/auth'>
						<FontAwesomeIcon
							icon={faCircleUser}
							className='fa fa-user-circle'
						/>{' '}
						Sign In
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
