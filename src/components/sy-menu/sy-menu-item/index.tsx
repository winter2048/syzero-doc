import React, { useRef, useEffect, useImperativeHandle } from "react";
import { Layout, Space, Button, Flex, Avatar, Tooltip } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export const SyMenuItem = (
  (
    props: {
      className?: string;
      icon?: React.ReactNode;
      path?: string;
      title: string;
    }
  ) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Button
        className={
          "sy-layout-menu-btn" +
          (location.pathname === props.path
            ? " sy-layout-menu-btn-active "
            : " ") +
          props.className
        }
        icon={props.icon}
        onClick={() => {
          props.path && navigate(props.path);
        }}
      >
        {props.title}
      </Button>
    );
  }
);

export default SyMenuItem;
