import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
	'auth/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(credentials),
				}
			);
			const data = await response.json();
			if (!data.body) {
				throw new Error(data.message);
			}
			return data.body.token;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		status: null,
		error: null,
	},
	reducers: {
		logout: (state) => {
			state.token = null;
			state.status = null;
			localStorage.removeItem('token');

		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.token = action.payload;
        state.error = null;

				localStorage.setItem('token', state.token);
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.status = 'failed';
				state.error = payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
