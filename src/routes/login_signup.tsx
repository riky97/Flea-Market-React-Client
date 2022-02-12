import React from "react";
import { Tabs } from "antd";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import LoginComponent from "../component/login-signup/loginComponent";
import SignupComponent from "../component/login-signup/signupComponent";

const { TabPane } = Tabs;

class Login extends React.Component {
  onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  render(): React.ReactNode {
    return (
      <body className="access">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <LoginOutlined />
                LOGIN
              </span>
            }
            key="1"
          >
            <LoginComponent />
          </TabPane>
          <TabPane
            tab={
              <span>
                <UserAddOutlined />
                SIGNUP
              </span>
            }
            key="2"
          >
            <SignupComponent />
          </TabPane>
        </Tabs>
      </body>
    );
  }
}
export default Login;
