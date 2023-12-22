import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Authorization } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppStore";
import { setToken } from "../../store/reducers/user";
import store from "../../store";
import "../../style/login.css";

type FieldType = {
  userName: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onFinish = async (values: FieldType) => {
    const token = await Authorization.Login(
      values.userName,
      values.password
    ).catch((res) => res);
    if (token.msg) {
      message.error(token.msg);
      return;
    }

    window.localStorage.setItem("token", token.data);
    dispatch(setToken({ token: token.data }));
    const redirect = new URLSearchParams(location.search).get("redirect");
    if (redirect) {
      navigate(redirect);
    } else {
      navigate("/chat");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="header">{store.getState().config.APP_TITLE}</div>
        <div className="header-subtitle">登录</div>
        <div className="form-wrapper">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="input-item">
              <Form.Item<FieldType>
                name="userName"
                rules={[{ required: true, message: "请输入用户名！" }]}
              >
                <Input placeholder="用户名" prefix={<UserOutlined />} />
              </Form.Item>
            </div>
            <div className="input-item">
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: "请输入密码！" }]}
              >
                <Input.Password placeholder="密码" prefix={<EditOutlined />} />
              </Form.Item>
            </div>
            <div className="input-item">
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                登录
              </Button>
            </div>
          </Form>
        </div>
        <div className="msg">
          没有帐户
          <a href="#1" style={{ marginLeft: "5px" }}>
            注册
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
