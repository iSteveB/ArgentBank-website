import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';
import authReducer from '../feature/authSlice';
import updateUserReducer from '../feature/updateUserSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		updateUser: updateUserReducer,
	},
	devTools: true,
});
