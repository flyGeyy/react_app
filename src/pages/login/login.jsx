import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const Item=Form.Item
export default class Login extends Component{
    render(){
        return(
            <div>
                <h2>后台管理</h2>
                <LoginForm login={this.login}/>
            </div>
        )
    }
}

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  loginClick=()=>{
      console.log(11)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Item>
    
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.loginClick}>
        登录
        </Button>
      </Form>
    );
  }
}

const LoginForm = Form.create()(LoginForm);





