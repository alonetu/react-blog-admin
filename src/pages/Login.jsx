import React, { Component } from "react";
import "../style/login.scss";

import { Form, Input, Button } from "antd";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="账户" name="name">
            <Input placeholder="请输入账户名"/>
          </FormItem>
          <FormItem label="密码" name="password">
            <Input type="password" placeholder="请输入密码"/>
          </FormItem>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
