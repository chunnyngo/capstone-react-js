import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  EditOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { https } from "../../Service/config";
import loginImg from "../../asset/login2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function RegisterPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (initialValues) => {
    https
      .post("/api/QuanLyNguoiDung/DangKy", initialValues)
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        setTimeout(() => {
          navigate("/Login");
        }, 3500);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.content,
        });
      });
  };

  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <Form
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
          }}
          className="Register-form max-w-[400px] w-full mx-auto bg-white px-14 pb-14 pt-11"
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <h2 className="text-4xl font-bold text-center py-4 mb-4">Sign Up</h2>
          {/* TÀI KHOẢN */}
          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản",
              },
              {
                pattern: /^\S+$/,
                message: "Không chứa khoảng trắng",
              },
              {
                pattern: /^[a-zA-Z0-9\s]+$/,
                message: "Chỉ gồm chữ hoặc số",
              },
            ]}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tài khoản"
              autoComplete="off"
            />
          </Form.Item>
          {/* MẬT KHẨU */}
          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật Khẩu"
            />
          </Form.Item>

          {/* EMAIL */}
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          {/* SỐ ĐIỆN THOẠI */}
          <Form.Item
            name="hoTen"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input
              prefix={<EditOutlined className="site-form-item-icon" />}
              placeholder="Họ và Tên"
            />
          </Form.Item>
          <Form.Item
            name="soDt"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              prefix={
                <PhoneOutlined className="site-form-item-icon rotate-90" />
              }
              style={{
                width: "100%",
              }}
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className=" border w-full my-5  bg-indigo-600 text-white text-xl h-12 "
            >
              Đăng kí
            </Button>
          </Form.Item>
          <Form.Item className="flex justify-end ">
            <NavLink
              to={"/Login"}
              style={{ color: "#4f45e4", fontSize: "15px" }}
            >
              {" "}
              Đăng Nhập !
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
