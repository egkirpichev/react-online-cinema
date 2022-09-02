import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { IUserSignUp } from "../../types/types";

export interface UserState {
  name: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  isLogged: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: null,
  email: null,
  password: null,
  token: null,
  isLogged: false,
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk<
  { email: string; password: string; name: string; refreshToken: string },
  IUserSignUp,
  { rejectValue: string }
>("user/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    return await createUserWithEmailAndPassword(auth, email, password).then(
      ({ user: { refreshToken } }) => {
        return { email, password, name, refreshToken };
      }
    );
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = true;
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.token = payload.refreshToken;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
