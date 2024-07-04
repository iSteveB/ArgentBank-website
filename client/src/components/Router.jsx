import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Profil from '../pages/Profile';

const Router = () => {
  return (
    <Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/login' element={<Auth />}/>
				<Route path='/profile' element={<Profil />}/>
				<Route path='*' element={<Home />} />
			</Routes>
  );
};

export default Router;