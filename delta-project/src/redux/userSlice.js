import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    birthday: null,
    listNFTs: null,
    linkedin: null,
    github: null,
};

  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = true;
            const {username, email, firstname, lastname, birthday, listNFTs, linkedin, github} = action.payload;
            state.username = username;
            state.email = email;
            state.firstname = firstname; 
            state.lastname = lastname;
            state.birthday = birthday;
            state.listNFTs = listNFTs;
            state.linkedin = linkedin;
            state.github = github;
        },
    },
  });
  
  export const {
    setLogin,
  } = userSlice.actions;
  
  export default userSlice.reducer;