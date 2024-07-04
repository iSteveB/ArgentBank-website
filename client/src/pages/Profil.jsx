import React from 'react';

const Profil = () => {
	return (
		<main className='main bg-dark'>
			<div className='profil-header'>
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<button className='edit-button'>Edit Name</button>
			</div>
			<h2 className='sr-only'>Accounts</h2>

			<section className='account'>
				<div class='account-content-wrapper'>
					<h3 class='account-title'>Argent Bank Checking (x8349)</h3>
					<p class='account-amount'>$2,082.79</p>
					<p class='account-amount-description'>Available Balance</p>
				</div>
				<div class='account-content-wrapper cta'>
					<button class='transaction-button'>
						View transactions
					</button>
				</div>
			</section>
		</main>
	);
};

export default Profil;
