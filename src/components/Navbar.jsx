import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  // SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "/layout/home",
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({ current: e.key });
    this.props.history.push(e.key);
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{display: 'flex', justifyContent: 'flex-end'}}
      >
        <Menu.Item key="/layout/home" icon={<MailOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="/layout/user-manage" icon={<MailOutlined />}>
          用户管理
        </Menu.Item>
        <Menu.Item key="/layout/search-blog" icon={<AppstoreOutlined />}>
          博客搜索
        </Menu.Item>
        {/* <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
        <SubMenu key="admin" icon={<AppstoreOutlined />} title="admin">
          <Menu.Item key="/layout/person-center">个人中心</Menu.Item>
          <Menu.Item key="alipay">
            <a
              href="https://github.com/alonetu/react-blog-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              项目地址
            </a>
          </Menu.Item>
          <Menu.Item key="/login">退出</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Navbar;
