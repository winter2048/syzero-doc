import { Flex, Tabs } from "antd";
import IconFont from "../../../components/icon-font";
import BasicSetting from "./basic-setting";
import DocSync from "./doc-sync";
import Notification from "./notification";
import AISetting from "./ai-setting";

function Setting() {
  const settingItems = [
    {
      title: "基础设置",
      component: BasicSetting,
    },
    {
      title: "文档同步",
      component: DocSync,
    },
    {
      title: "消息通知",
      component: Notification,
    },
    {
      title: "AI配置",
      component: AISetting,
    },
  ];
  return (
    <Flex className="sy-content">
      <Tabs
        className="sy-content-tabs"
        defaultActiveKey="1"
        tabPosition={"left"}
        items={settingItems.map((item) => {
          return {
            label: item.title,
            key: item.title,
            icon: <IconFont type="icon-icons-sun" />,
            children: <item.component title={item.title}></item.component>,
          };
        })}
        tabBarExtraContent={{
          left: (
            <div className="sy-content-title">
              <h3>设置</h3>
            </div>
          ),
        }}
      />
    </Flex>
  );
}

export default Setting;
