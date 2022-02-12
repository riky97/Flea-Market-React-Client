import { Menu } from "antd";

import { Link } from "react-router-dom";
import {
  UserOutlined,
  UserAddOutlined,
  SkinOutlined,
  ThunderboltOutlined,
  VideoCameraOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
const { SubMenu } = Menu;
class Group extends React.Component {
  group = () => {
    const category: object = {
      appliance: {
        category: "appliance",
        icon: <ThunderboltOutlined />,
        subcategory: {
          sub1: "vacuum",
          sub2: "coffee pots",
          sub3: "toaster",
          sub4: "blenders",
        },
        link: {
          link1: "vacuum",
          link2: "coffeepots",
          link3: "toaster",
          link4: "blenders",
        },
      },
      clothing: {
        category: "clothing",
        icon: <SkinOutlined />,
        subcategory: {
          sub1: "clothes",
          sub2: "purse",
          sub3: "shoes",
          sub4: "fitting clothes",
        },
        link: {
          link1: "clothes",
          link2: "purse",
          link3: "shoes",
          link4: "fittingclothes",
        },
      },
      photovideo: {
        category: "photo/video",
        icon: <VideoCameraOutlined />,
        subcategory: {
          sub1: "cameras",
          sub2: "fitting video",
          sub3: "telecamera",
          sub4: "microphones",
        },
        link: {
          link1: "cameras",
          link2: "fittingvideo",
          link3: "telecamera",
          link4: "microphones",
        },
      },
      hobby: {
        category: "hobby",
        icon: <StarOutlined />,
        subcategory: {
          sub1: "toys",
          sub2: "films/dvds",
          sub3: "music",
          sub4: "books/magazines",
        },
        link: {
          link1: "toys",
          link2: "filmsdvds",
          link3: "music",
          link4: "booksmagazines",
        },
      },
    };
    let group: any = [];
    for (const [key, value] of Object.entries(category)) {
      group.push(
        <SubMenu
          key={value.category}
          className="submenu-active"
          title={value.category}
        >
          <Menu.Item key={value.subcategory.sub1}>
            <Link
              to={"/announce/" + value.category + "/" + value.link.link1}
              className="link-submenu"
            >
              {value.subcategory.sub1}
            </Link>{" "}
          </Menu.Item>
          <Menu.Item key={value.subcategory.sub2}>
            <Link
              to={"/announce/" + value.category + "/" + value.link.link2}
              className="link-submenu"
            >
              {value.subcategory.sub2}
            </Link>
          </Menu.Item>
          <Menu.Item key={value.subcategory.sub3}>
            <Link
              to={"/announce/" + value.category + "/" + value.link.link3}
              className="link-submenu"
            >
              {value.subcategory.sub3}
            </Link>
          </Menu.Item>
          <Menu.Item key={value.subcategory.sub4}>
            <Link
              to={"/announce/" + value.category + "/" + value.link.link4}
              className="link-submenu"
            >
              {value.subcategory.sub4}
            </Link>
          </Menu.Item>
        </SubMenu>
      );
    }
    return group;
  };
  render(): React.ReactNode {
    return <>{this.group()}</>;
  }
}
export default Group;
