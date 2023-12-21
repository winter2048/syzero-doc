import React from "react";
import { Button, Flex, Avatar, Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppStore";
import { changeTheme } from "../../store/reducers/config";
import { logOut } from "../../store/reducers/user";
import {
  SearchOutlined,
  MessageOutlined,
  WalletOutlined,
  ReadOutlined,
  SettingOutlined,
  GithubOutlined,
  UserOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import SyMenuItem from "./sy-menu-item";
import { useNavigate, useLocation } from "react-router-dom";
export const SyMenu = (props: {
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { THEME } = useAppSelector((state) => state.config);
  const { userName } = useAppSelector((state) => state.user);

  const IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/c/font_2048386_hcyvfe00k1u.js"],
  });

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
        <SyMenuItem
          urlPath="/search"
          name="搜索"
          icon={<SearchOutlined />}
        ></SyMenuItem>
        <SyMenuItem
          urlPath="/public"
          name="公共"
          icon={<WalletOutlined />}
        ></SyMenuItem>
        <SyMenuItem
          urlPath="/chat"
          name="聊天"
          icon={<MessageOutlined />}
        ></SyMenuItem>
        <SyMenuItem
          urlPath="/repo"
          name="知识库"
          icon={<ReadOutlined />}
        ></SyMenuItem>
        <SyMenuItem
          urlPath="/setting"
          name="设置"
          icon={<SettingOutlined />}
        ></SyMenuItem>
        <SyMenuItem
          urlPath="/user"
          name="账号"
          icon={<UserOutlined />}
        ></SyMenuItem>
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
          ></Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default SyMenu;
