import React, { useRef, useEffect, useImperativeHandle } from "react";
import { Layout, Space, Button, Flex, Avatar, Tooltip } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export const SyMenuItem = (
  (
    props: {
      className?: string;
      icon?: React.ReactNode;
      urlPath: string;
      name: string;
    }
  ) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Button
        className={
          "sy-layout-menu-btn" +
          (location.pathname === props.urlPath
            ? " sy-layout-menu-btn-active "
            : " ") +
          props.className
        }
        icon={props.icon}
        onClick={() => {
          navigate(props.urlPath);
        }}
      >
        {props.name}
      </Button>
    );
  }
);

export default SyMenuItem;
