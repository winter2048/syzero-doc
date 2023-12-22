const routes: Route = {
  appIn: [
    {
      title: "搜索",
      path: "/search",
      auth: true,
      component: import("../pages/app/search"),
    },
    {
      title: "公共",
      path: "/public",
      auth: true,
      component: import("../pages/app/public"),
    },
    {
      title: "聊天",
      path: "/chat",
      auth: true,
      component: import("../pages/app/chat"),
    },
    {
      title: "知识库",
      path: "/repo",
      auth: true,
      component: import("../pages/app/repo"),
    },
    {
      title: "设置",
      path: "/setting",
      auth: true,
      component: import("../pages/app/setting"),
    },
    {
      title: "账号",
      path: "/user",
      auth: true,
      component: import("../pages/app/user"),
    },
  ],
  appOut: [
    {
      title: "登录",
      path: "/login",
      component: import("../pages/login"),
    },
  ],
};

export default routes;
