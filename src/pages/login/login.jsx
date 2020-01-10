import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd'
import './login.less'
const Item=Form.Item
export default class Login extends Component{
    render(){
        return(
            <div className='login-header'>
                <h2>后台管理系统</h2>
                <div className="login-content">
                  <h3>用户登陆</h3>
                  <LoginForm login={this.login}/>
                </div>
                
            </div>
        )
    }
}

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
      <Form onSubmit={this.handleSubmit} className="login-form" layout='inline'>
        <Item label="用户名:" labelAlign='left' className='login-label'>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
              className='login-input'
            />,
          )}
        </Item>
        <Item label="密　码:" labelAlign='left' className='login-label'>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
              className='login-input'
            />,
          )}
        </Item>
        
        <Button type="primary" htmlType="submit" className="login-button" onClick={this.loginClick}>
        登录
        </Button>
        <Button type="primary" htmlType="submit" className="login-button" onClick={this.loginClick}>
        重置
        </Button>
       
        
      </Form>
    );
  }
}

 LoginForm = Form.create()(LoginForm);





