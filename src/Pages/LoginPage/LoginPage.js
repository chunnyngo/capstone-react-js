import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../../asset/login2.jpg";
import { dangNhapAction } from "../../redux/actions/QuanLiNguoiDungAction";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(dangNhapAction(values));
    setTimeout(() => {
      navigate("/Home");
    }, 2000);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="/" />
      </div>

      <div className=" bg-gray-100 flex flex-col justify-center">
        <Form
          name="normal_login"
          className="login-form max-w-[500px] w-full mx-auto bg-white p-10"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h2 className="text-4xl font-bold text-center py-6">BRAND.</h2>
          <Form.Item
            name="taiKhoan"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tài Khoản"
            />
          </Form.Item>
          {/* MẬT KHẨU */}
          <Form.Item
            name="matKhau"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật Khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className=" border w-full my-5  bg-indigo-600 text-white text-xl h-12 "
            >
              Đăng Nhập
            </Button>
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ Tài Khoản</Checkbox>
            </Form.Item>
            <NavLink to={"/Register"} style={{ color: "#4f45e4" }}>
              {" "}
              Đăng Kí !
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
