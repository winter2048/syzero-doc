import React from "react";
import { Button, Flex, Avatar, Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppStore";
import { changeTheme } from "../../store/reducers/config";
import { logOut } from "../../store/reducers/user";
import menus from "../../menu";
import { GithubOutlined } from "@ant-design/icons";
import SyMenuItem from "./sy-menu-item";
import IconFont from "../icon-font";
export const SyMenu = (props: {}) => {
  const dispatch = useAppDispatch();
  const { THEME, GITHUB_URL } = useAppSelector((state) => state.config);
  const { userName } = useAppSelector((state) => state.user);
  return (
    <Flex
      vertical={true}
      align={"center"}
      style={{ height: "100%" }}
      justify={"space-between"}
    >
      <Flex vertical={true} align={"center"}>
        <div className="sy-layout-menu-avatar">
          <Avatar size={32}>{userName}</Avatar>
        </div>
        {menus.map((menu) => (
          <SyMenuItem
            path={menu.path}
            title={menu.title}
            icon={
              typeof menu.icon === "string" ? (
                <IconFont type={menu.icon} />
              ) : (
                <menu.icon />
              )
            }
            key={menu.path}
          ></SyMenuItem>
        ))}
      </Flex>

      <Flex vertical={true} align={"center"}>
        <Tooltip placement="right" title="退出登录">
          <Button
            className="sy-layout-menu-btn"
            icon={<IconFont type="icon-tuichudenglu" />}
            onClick={() => {
              dispatch(logOut());
            }}
          ></Button>
        </Tooltip>
        <Tooltip
          placement="right"
          title={THEME === "dark" ? "亮色模式" : "暗色模式"}
        >
          <Button
            className="sy-layout-menu-btn"
            icon={
              <IconFont
                type={THEME === "dark" ? "icon-icons-sun" : "icon-yejianmoshi"}
              />
            }
            onClick={() => {
              dispatch(
                changeTheme({ THEME: THEME === "dark" ? "light" : "dark" })
              );
            }}
          ></Button>
        </Tooltip>
        <Tooltip placement="right" title="GitHub">
          <Button
            className="sy-layout-menu-btn"
            icon={<GithubOutlined />}
            onClick={()=>{
              window.open(GITHUB_URL, "_blank");
            }}
          ></Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default SyMenu;
