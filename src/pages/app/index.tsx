import React from "react";
import { Outlet } from "react-router-dom";
import { initState } from "../../store/reducers/user";
import { useAppDispatch } from "../../hooks/useAppStore";
import { Authorization } from "../../api";
import { Layout, Space } from "antd";
import SyMenu from "../../components/sy-menu";
import "../../style/App.css";

const { Sider, Content } = Layout;

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async function fn() {
      const userInfo = await Authorization.GetUserInfo().catch((res) => {
        if (res.code === -3) {
         // navigate("/login");
        }
      });
      dispatch(initState({ userName: userInfo?.data.nickName }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Sider width={60} className="sy-layout-menu">
            <SyMenu/>
          </Sider>
          <Layout>
            <Content className="sy-layout-content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
