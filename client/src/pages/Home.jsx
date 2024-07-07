import React from 'react';
import FeatureCard from '../components/FeatureCard';
import iconChat from '../assets/images/icon-chat.png';
import iconMoney from '../assets/images/icon-money.png';
import iconSecurity from '../assets/images/icon-security.png';

const Home = () => {
	return (
		<main className='main'>
			<section className='hero'>
				<div className='hero-content'>
					<h2 className='sr-only'>Promoted Content</h2>
					<p className='subtitle'>No fees.</p>
					<p className='subtitle'>No minimum deposit.</p>
					<p className='subtitle'>High interest rates.</p>
					<p className='text'>
						Open a savings account with Argent Bank today!
					</p>
				</div>
			</section>

			<section className='features'>
				<h2 className='sr-only'>Features</h2>
				<FeatureCard
					iconSrc={iconChat}
					title='You are our #1 priority'
					description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
				/>
				<FeatureCard
					iconSrc={iconMoney}
					title='More savings means higher rates'
					description='The more you save with us, the higher your interest rate will be!'
				/>
				<FeatureCard
					iconSrc={iconSecurity}
					title='Security you can trust'
					description='We use top of the line encryption to make sure your data and money is always safe.'
				/>
			</section>
		</main>
	);
};

export default Home;
