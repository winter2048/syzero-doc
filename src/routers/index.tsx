import { RouteObject, useRoutes } from "react-router-dom";
import React, { lazy } from "react";
import RequireAuth from "../components/requireAuth";
// react懒加载
const App = lazy(() => import("../pages/app"));
const Login = lazy(() => import("../pages/login"));
const Search = lazy(() => import("../pages/app/search"));
const Public = lazy(() => import("../pages/app/public"));
const Chat = lazy(() => import("../pages/app/chat"));
const Repo = lazy(() => import("../pages/app/repo"));
const Setting = lazy(() => import("../pages/app/setting"));
const User = lazy(() => import("../pages/app/user"));

const router: Array<RouteObject> = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <RequireAuth>
          <App />
        </RequireAuth>
      </React.Suspense>
    ),
    children: [
      {
        path: "search",
        element: (
          <React.Suspense>
            <Search></Search>
          </React.Suspense>
        ),
      },  
      {
        path: "public",
        element: (
          <React.Suspense>
            <Public></Public>
          </React.Suspense>
        )
      }, 
      {
        path: "chat",
        element: (
          <React.Suspense>
            <Chat></Chat>
          </React.Suspense>
        )
      },  
      {
        path: "repo",
        element: (
          <React.Suspense>
            <Repo></Repo>
          </React.Suspense>
        ),
      },
      {
        path: "setting",
        element: (
          <React.Suspense>
            <Setting></Setting>
          </React.Suspense>
        ),
      },
      {
        path: "user",
        element: (
          <React.Suspense>
            <User></User>
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <React.Suspense>
        <Login />
      </React.Suspense>
    ),
  },
];

function Routes() {
  return useRoutes(router);
}

export default Routes;
