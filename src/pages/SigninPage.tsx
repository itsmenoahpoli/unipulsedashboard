import React from "react";
import BRAND_LOGO from "@/assets/brand-logo.png";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

type SigninFormData = {
  email: string;
  password: string;
};

export const SigninPage: React.FC = () => {
  const [form] = Form.useForm<SigninFormData>();

  const handleSubmit = (values: SigninFormData) => {
    console.log("Form values:", values);
  };

  return (
    <div className="h-screen w-screen flex justify-center pt-[80px] auth-layout">
      <div className="w-[375px] flex flex-col gap-y-5">
        <img src={BRAND_LOGO} className="w-32 h-32 mx-auto" alt="brand-logo" />

        <h1 className="text-2xl text-white text-center font-bold">
          Uni-pulse Admin Dashboard
        </h1>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="!mr-2" />}
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="!mr-2" />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              color="green"
              size="large"
              className="!text-sm"
              block
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
