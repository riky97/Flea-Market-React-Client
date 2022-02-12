import { Avatar, Result } from "antd";
import React from "react";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import axios from "axios";
import Cookies from "universal-cookie";

class Profile extends React.Component {
  state = {
    result_profile: {},
  };
  componentDidMount() {
    axios.get("http://localhost:9000/profile").then((response) => {
      const data = response.data;
      //console.log(response.data);
      const cookies = new Cookies();
      const session: any = cookies.get("session");
      if (session !== undefined) {
        for (const [key, value] of Object.entries(data)) {
          //console.log(`${key}: ${value}`);
          console.log(session.token);
          if (key === session.token) {
            Object.assign(this.state.result_profile, value);
          }
        }
      }
    });
  }
  render() {
    const cookies = new Cookies();
    const session: any = cookies.get("session");
    var profile: any = this.state.result_profile;
    return (
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
      />
    );
  }
}

export default Profile;
