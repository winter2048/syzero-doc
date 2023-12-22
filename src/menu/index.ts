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

const menus: MenuItem[] = [
  {
    title: "搜索",
    icon: SearchOutlined,
    path: "/search",
  },
  {
    title: "公共",
    icon: WalletOutlined,
    path: "/public",
  },
  {
    title: "聊天",
    icon: MessageOutlined,
    path: "/chat",
  },
  {
    title: "知识库",
    icon: ReadOutlined,
    path: "/repo",
  },
  {
    title: "设置",
    icon: SettingOutlined,
    path: "/setting",
  },
  {
    title: "账号",
    icon: UserOutlined,
    path: "/user",
  },
];

export default menus;
