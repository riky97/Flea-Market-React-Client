import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, BackTop, Divider } from "antd";
import Cookies from "universal-cookie";

import {
  UserOutlined,
  UserAddOutlined,
  SkinOutlined,
  ThunderboltOutlined,
  VideoCameraOutlined,
  StarOutlined,
} from "@ant-design/icons";

import LoginSignup from "./routes/login_signup";
import Home from "./routes/home";
import Avatar from "antd/lib/avatar/avatar";
import Profile from "./routes/profile";
import Announce from "./routes/announce";
import ItemGrup from "./component/sidebar/submenu";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  group = () => {
    const category_subcategory: object = {
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
    for (const [key, value] of Object.entries(category_subcategory)) {
      group.push(
        <SubMenu
          icon={this.state.collapsed && value.icon}
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

  logout = () => {
    const cookies = new Cookies();
    cookies.remove("session");
    window.location.href = "/login";
  };

  onCollapse = (collapsed: any) => {
    //console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const cookies = new Cookies();
    const session: any = cookies.get("session");

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className="sidebar"
          collapsible
          collapsed={collapsed}
          trigger={null}
          onCollapse={this.onCollapse}
          width={240}
        >
          <Menu className="menu" mode="vertical">
            <a href="/">
              <div className="logo">
                <h5>FM</h5>
              </div>
            </a>
            {session === undefined ? (
              <Menu.Item key="login" icon={collapsed && <UserOutlined />}>
                <Link className="link-menu" to={"/login"}>
                  Login/Signup
                </Link>
              </Menu.Item>
            ) : (
              <>
                <SubMenu
                  key="user"
                  icon={
                    <Avatar
                      style={{
                        backgroundColor: "var(--color-orange)",
                        color: "#fff !important",
                        verticalAlign: "middle",
                      }}
                      size="default"
                      gap={2}
                    >
                      {session.name.charAt(0)}
                    </Avatar>
                  }
                  title={session.name}
                >
                  <Menu.Item key="profile">
                    <Link
                      className="link-menu"
                      to={"/profile/" + session.token}
                    >
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="settings">
                    {" "}
                    <Link
                      className="link-menu"
                      to={"/profile/settings/" + session.token}
                    >
                      Settings
                    </Link>
                  </Menu.Item>
                  <Menu.Item
                    key="logout"
                    className="sidebar-logout"
                    onClick={this.logout}
                  >
                    Logout
                  </Menu.Item>
                </SubMenu>
                <Divider
                  orientation="left"
                  style={{
                    borderBottom: ".25em solid #fff",
                    opacity: ".5",
                  }}
                ></Divider>
              </>
            )}

            {this.group()}
          </Menu>
        </Sider>
        <Layout id="siteLayout" className="site-layout">
          <Header
            className="site-layout-background-header"
            style={{ padding: 0 }}
          >
            <h1>flea market</h1>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item className="breadcrump-item">
                Home
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background-content"
              id="content-layout"
              style={{ padding: 24, minHeight: "100%" }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/announce/:id/:id" element={<Announce />} />
              </Routes>
            </div>
          </Content>
          <Footer
            className="site-layout-background-footer"
            style={{ textAlign: "center" }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        <BackTop />
      </Layout>
    );
  }
}
export default App;

/*
 <SubMenu
              key="appliance"
              className="submenu-active"
              icon={collapsed && <ThunderboltOutlined />}
              title="Appliance"
            >
              <Menu.Item key="vacuum">
                <Link to="/announce/appliance/vacum" className="link-submenu">
                  vacuum
                </Link>{" "}
              </Menu.Item>
              <Menu.Item key="coffee">
                <Link
                  to="/announce/appliance/coffeepots"
                  className="link-submenu"
                >
                  coffee pots
                </Link>
              </Menu.Item>
              <Menu.Item key="toaster">
                <Link to="/announce/appliance/toaster" className="link-submenu">
                  toaster
                </Link>
              </Menu.Item>
              <Menu.Item key="blenders">
                <Link
                  to="/announce/appliance/blenders"
                  className="link-submenu"
                >
                  blenders
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="clothing"
              icon={collapsed && <SkinOutlined />}
              title="clothing"
            >
              <Menu.Item key="clothes">
                <Link to="/announce/clothing/clothes" className="link-submenu">
                  clothes
                </Link>
              </Menu.Item>
              <Menu.Item key="purse">
                <Link to="/announce/clothing/purse" className="link-submenu">
                  purse
                </Link>
              </Menu.Item>
              <Menu.Item key="shoes">
                <Link to="/announce/clothing/shoes" className="link-submenu">
                  shoes
                </Link>
              </Menu.Item>
              <Menu.Item key="fittingClo">
                <Link to="/announce/clothing/fitting" className="link-submenu">
                  fitting
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="photo"
              icon={collapsed && <VideoCameraOutlined />}
              title="Photo/Video"
            >
              <Menu.Item key="cameras">
                <Link
                  to="/announce/photovideo/cameras"
                  className="link-submenu"
                >
                  cameras
                </Link>
              </Menu.Item>
              <Menu.Item key="fittingPho">
                <Link
                  to="/announce/photovideo/fitting"
                  className="link-submenu"
                >
                  fitting
                </Link>
              </Menu.Item>
              <Menu.Item key="telecamera">
                <Link
                  to="/announce/photovideo/telecamera"
                  className="link-submenu"
                >
                  telecamera
                </Link>
              </Menu.Item>
              <Menu.Item key="microphones">
                <Link
                  to="/announce/photovideo/microphones"
                  className="link-submenu"
                >
                  microphones
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="hobby"
              icon={collapsed && <StarOutlined />}
              title="Hobby"
            >
              <Menu.Item key="toys">
                <Link to="/announce/hobby/toys" className="link-submenu">
                  toys
                </Link>
              </Menu.Item>
              <Menu.Item key="films/dvd">
                <Link to="/announce/hobby/filmsdvds" className="link-submenu">
                  films/DVDs
                </Link>
              </Menu.Item>
              <Menu.Item key="music">
                <Link to="/announce/hobby/music" className="link-submenu">
                  music
                </Link>
              </Menu.Item>
              <Menu.Item key="books_magazines">
                <Link
                  to="/announce/hobby/booksmagazines"
                  className="link-submenu"
                >
                  books/magazines
                </Link>
              </Menu.Item>
            </SubMenu>
*/
