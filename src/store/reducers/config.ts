import { createSlice } from "@reduxjs/toolkit";

const initialState: IConfig = {
  SERVER_URL: "",
  THEME: ""
};

// 定义初始值和 reducer
const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeTheme: (state, actions) => {
      state.THEME = actions.payload.THEME;
    },
    initState: (state, actions) => {
      state.SERVER_URL = actions.payload.SERVER_URL;
      state.SERVER_URL_LOGIN = actions.payload.SERVER_URL_LOGIN;
      state.APP_TITLE = actions.payload.APP_TITLE;
    },
  },
});
// 暴露 actions
export const { changeTheme, initState } = configSlice.actions;
// 导入注册reducer
export default configSlice.reducer;
