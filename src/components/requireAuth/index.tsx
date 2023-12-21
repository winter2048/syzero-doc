import React, { useRef, useEffect, useImperativeHandle } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppStore";

function RequireAuth({ children }: { children: JSX.Element }) {
  let navigate = useNavigate();

  const { token } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
}

export default RequireAuth;
