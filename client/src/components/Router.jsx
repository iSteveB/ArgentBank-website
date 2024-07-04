import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Profil from '../pages/Profil';

const Router = () => {
  return (
    <Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/auth' element={<Auth />}/>
				<Route path='/auth/profil/:id' element={<Profil />}/>
				<Route path='*' element={<Home />} />
			</Routes>
  );
};

export default Router;