import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

class LoginComponent extends React.Component {
  onFinish = (values: any) => {
    const cookies = new Cookies();
    console.log("Received values of form: ", values);
    axios.post("http://localhost:9000/login", values).then((response) => {
      if (response.status === 200) {
        const data: any = response.data.session;
        if (data.status === "success") {
          //window.sessionStorage.setItem(data.token, data);
          cookies.set("session", data);
          window.location.href = "/";
        }
        if (data.status === "KO") {
          message.error(data.message, 4.5);
        }
      }
    });
  };
  render(): React.ReactNode {
    return (
      <section id="login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <h3>log in</h3>
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
              placeholder="Email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item className="login-section-remember">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#fff" }}>Remember me</Checkbox>
            </Form.Item>

            <Link to={"#"} className="login-form-forgot">
              {" "}
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item style={{ color: "#fff" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Log in
            </Button>
            <div
              style={{
                paddingTop: ".7em",
                color: "#fff",
                textDecoration: "underline",
              }}
            >
              <Link to="/">home</Link>
            </div>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
export default LoginComponent;
