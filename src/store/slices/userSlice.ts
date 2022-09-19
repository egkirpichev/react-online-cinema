import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  signOut,
  User,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "services";
import { IMovieShort, IRequestParams, ISettings, IUserSignIn, IUserSignUp } from "types";
import { getFirebaseErrorMessage } from "utils";

export interface IUserState {
  name: string | null;
  email: string | null;
  favorites: IMovieShort[];
  searchResults: IMovieShort[];
  error: string | null;
  isLogged: boolean;
  isLoading: boolean;
  isPasswordReset: boolean;
  isLightMode: boolean;
}

const initialState: IUserState = {
  name: null,
  email: null,
  favorites: [],
  searchResults: [],
  error: null,
  isLogged: false,
  isLoading: false,
  isPasswordReset: false,
  isLightMode: false,
};

export const signUp = createAsyncThunk<
  { email: string; password: string; name: string },
  IUserSignUp,
  { rejectValue: string }
>("user/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password).then(() => {
      return { email, password, name };
    });
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
  try {
    return await signInWithEmailAndPassword(auth, email, password).then(
      ({ user: { refreshToken, displayName } }) => {
        const name = displayName as string;
        return { email, password, name, refreshToken };
      },
    );
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const signUserOut = createAsyncThunk<void, undefined, { rejectValue: string }>(
  "user/signUserOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const reauthentificate = createAsyncThunk<void, ISettings, { rejectValue: string }>(
  "user/reauthentificate",
  async ({ password }, { rejectWithValue }) => {
    const user = auth.currentUser as User;
    const credential = EmailAuthProvider.credential(user.email as string, password);
    try {
      await reauthenticateWithCredential(auth.currentUser as User, credential);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const updateUserName = createAsyncThunk<void, { name: string }, { rejectValue: string }>(
  "user/updateUserName",
  async ({ name }, { rejectWithValue }) => {
    if (auth.currentUser)
      try {
        await updateProfile(auth.currentUser, { displayName: name });
      } catch (error) {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      }
  },
);

export const updateUserEmail = createAsyncThunk<void, ISettings, { rejectValue: string }>(
  "user/updateUserEmail",
  async ({ email }, { rejectWithValue }) => {
    if (auth.currentUser)
      try {
        await updateEmail(auth.currentUser, email);
      } catch (error) {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      }
  },
);

export const updateUserPassword = createAsyncThunk<void, ISettings, { rejectValue: string }>(
  "user/updateUserPassword",
  async ({ newPassword }, { rejectWithValue }) => {
    if (auth.currentUser)
      try {
        await updatePassword(auth.currentUser, newPassword);
      } catch (error) {
        const firebaseError = error as FirebaseError;
        return rejectWithValue(firebaseError.code);
      }
  },
);

export const resetPassword = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
  "user/resetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetPasswordState: (state) => {
      state.isPasswordReset = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
    updateUserCredentials: (state) => {
      if (auth.currentUser) {
        state.name = auth.currentUser.displayName;
        state.email = auth.currentUser.email;
      }
    },
    toggleColorMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isLightMode = payload;
    },
    addToFavorites: (state, { payload }: PayloadAction<IMovieShort>) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    },
    searchInFavourites: (state, { payload }: PayloadAction<IRequestParams>) => {
      state.searchResults = state.favorites.filter((movie) =>
        movie.Title.toLowerCase().match(payload.s.toLowerCase()),
      );
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
      state.isLogged = false;
      state.name = payload.name;
      state.email = payload.email;
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
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(signUserOut.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isPasswordReset = false;
    });
    builder.addCase(signUserOut.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.name = null;
      state.email = null;
    });
    builder.addCase(signUserOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
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
    builder.addCase(reauthentificate.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(reauthentificate.rejected, (state, { payload }) => {
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
      state.isLogged = true;
    });
    builder.addCase(updateUserName.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = getFirebaseErrorMessage(payload);
      }
    });
    builder.addCase(updateUserEmail.pending, (state) => {
      state.isLoading = true;
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
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isLoading = true;
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
  resetPasswordState,
  resetError,
  updateUserCredentials,
  toggleColorMode,
  addToFavorites,
  removeFromFavorites,
  searchInFavourites,
} = userSlice.actions;
export default userSlice.reducer;
