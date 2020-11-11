import React, { Component } from "react";
import "../style/login.scss";

import { Form, Input, Button } from "antd";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/layout/home");
  };

  render() {
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem name="name" className="login-form-input">
            <Input placeholder="请输入用户名" className="login-form-user" />
          </FormItem>
          <FormItem name="password" className="login-form-input">
            <Input
              type="password"
              placeholder="请输入密码"
              className="login-form-password"
            />
          </FormItem>
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            onClick={this.handleSubmit}
            className="login-form-btn"
          >
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
