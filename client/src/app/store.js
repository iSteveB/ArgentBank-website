import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';
import authReducer from '../feature/auth/authSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer
	},
	devTools: true,
});
