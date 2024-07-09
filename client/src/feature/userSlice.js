import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from './authSlice';

export const getUser = createAsyncThunk(
	'user/getUser',
	async (token, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response.json();
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.user = action.payload.body;
			})
			.addCase(logout, (state) => {
				state.user = null;
			});
	},
});

export default userSlice.reducer;
