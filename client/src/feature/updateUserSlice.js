import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async ({ token, userName }, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'http://localhost:3001/api/v1/user/profile',
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({userName}),
				}
			);
			return response.json();
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState: {
    username: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.username = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      });
  },
});

export default updateUserSlice.reducer;
