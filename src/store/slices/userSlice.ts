import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { IUserSignUp, IUserSignIn } from "../../types/types";

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

export const signIn = createAsyncThunk<
  {
    email: string;
    password: string;
    name: string;
    refreshToken: string;
  },
  IUserSignIn,
  { rejectValue: string }
>("user/signIn", async ({ email, password }, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    return await signInWithEmailAndPassword(auth, email, password).then(
      ({ user: { refreshToken, displayName } }) => {
        const name = displayName as string;
        return { email, password, name, refreshToken };
      }
    );
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.message);
  }
});

export const updateUserProfile = createAsyncThunk<
  void,
  IUserSignUp,
  { rejectValue: string }
>("user/updateProfile", async ({ name }, { rejectWithValue }) => {
  const auth = getAuth();
  if (auth.currentUser) {
    return await updateProfile(auth.currentUser, { displayName: name })
      .then((response) => {
        console.log(response);
      })
      .catch((error: FirebaseError) => {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.message);
      });
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.name = null;
      state.email = null;
      state.password = null;
      state.token = null;
      state.isLogged = false;
    },
  },
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
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = true;
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.token = payload.refreshToken;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

// Action creators are generated for each case reducer function

export const { signOut } = userSlice.actions;
export default userSlice.reducer;
