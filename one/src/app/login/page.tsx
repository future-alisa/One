"use client";

import { Button, Avatar, Form, Input, Space, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FieldType } from "@/common/interfaces/i-form";

export default function LoginPage() {
  return (
    //  背景板
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-green-600 via-indigo-400 to-teal-500">
      {/* 登录表单容器 */}
      <div className="w-[32rem] h-96 flex flex-row bg-white opacity-70 rounded-xl">
        {/* 容器左 */}
        <div className="w-72 h-full bg-black rounded-l-xl"></div>
        {/* 容器右 */}
        <div className="bg-orange-200 flex-1 rounded-r-xl">
          {/* 头像 */}
          <div className="flex-1 flex justify-center">
            <Avatar size={64} icon={<UserOutlined />}></Avatar>
          </div>
          <Form
            className="mt-8"
            name="user-login"
            wrapperCol={{ span: 24 }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "请输入你的用户名!" }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "请输入你的密码!" }]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>

            <Form.Item<FieldType>
              name="captcha"
              rules={[{ required: true, message: "请输入验证码!" }]}
            >
              <Space direction="horizontal">
                <Input placeholder="请输入验证码" />
                {/* <Image src="@/assets/images/favicon.ico" alt=""></Image> */}
                <div className="w-24 text-center text-lg">1234</div>
              </Space>
            </Form.Item>

            <Form.Item >
              <Button className="w-full" size="middle" type="primary">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
