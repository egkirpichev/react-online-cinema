import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { ISettings, IUserSignIn, IUserSignUp } from "../../types";
import { getFirebaseErrorMessage } from "../../utils";

export interface UserState {
  name: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  error: string | null;
  isLogged: boolean;
  isLoading: boolean;
  isPasswordReset: boolean;
  isLightMode: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  password: null,
  token: null,
  error: null,
  isLogged: false,
  isLoading: false,
  isPasswordReset: false,
  isLightMode: false,
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
    return rejectWithValue(firebaseError.code);
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
    return rejectWithValue(firebaseError.code);
  }
});

export const updateUserName = createAsyncThunk<
  void,
  { name: string },
  { rejectValue: string }
>("user/updateUserName", async ({ name }, { rejectWithValue }) => {
  const auth = getAuth();
  if (auth.currentUser) {
    return await updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error: FirebaseError) => {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      });
  }
});

export const updateUserEmail = createAsyncThunk<
  void,
  ISettings,
  { rejectValue: string }
>("user/updateUserEmail", async ({ email }, { rejectWithValue }) => {
  const auth = getAuth();
  if (auth.currentUser) {
    return await updateEmail(auth.currentUser, email)
      .then(() => {})
      .catch((error: FirebaseError) => {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      });
  }
});

export const updateUserPassword = createAsyncThunk<
  void,
  ISettings,
  { rejectValue: string }
>("user/updateUserPassword", async ({ newPassword }, { rejectWithValue }) => {
  const auth = getAuth();
  if (auth.currentUser) {
    return await updatePassword(auth.currentUser, newPassword)
      .then(() => {})
      .catch((error: FirebaseError) => {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      });
  }
});

export const resetPassword = createAsyncThunk<
  void,
  { email: string },
  { rejectValue: string }
>("user/resetPassword", async ({ email }, { rejectWithValue }) => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch((error: FirebaseError) => {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    });
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
    resetPasswordState: (state) => {
      state.isPasswordReset = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
    updateUserCredentials: (state, { payload }: PayloadAction<ISettings>) => {
      const { currentUser } = getAuth();
      if (currentUser) {
        state.name = currentUser.displayName;
        state.email = currentUser.email;
        state.password = payload.newPassword
          ? payload.newPassword
          : state.password;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isPasswordReset = false;
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
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isPasswordReset = false;
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
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.password = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.isPasswordReset = true;
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(updateUserName.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUserName.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserName.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(updateUserEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const {
  signOut,
  resetPasswordState,
  resetError,
  updateUserCredentials,
} = userSlice.actions;
export default userSlice.reducer;
