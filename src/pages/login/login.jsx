import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd'
import './login.less'
import {reqLogin} from '../../api/index'
const Item = Form.Item
export default class Login extends Component{
  // 请求后台登陆
  login=async (username,password)=>{
    const result=await reqLogin(username,password)
    console.log(result)
  }
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

  // 登陆
  loginClick=(e)=>{
    // 阻止事件默认行为(不提交表单)
      e.preventDefault()
      // 对表单数据进行验证,如果没有错误,调用组件的login方法
      this.props.form.validateFields((err,values)=>{
        if(!err){
          this.props.login(values.username,values.password)
        }
      })


  }
  // 重置
  resetClick=()=>{
    this.setState({
      username:'',
      password:''
    })

  }
  checkUsername=(value,callback)=>{
    debugger
    if(!value){
      callback('请输入用户名')
    }else if (!/^\w+$/.test(value)){
      callback('用户只输入英文名')
    }else if (value.length<3){
      callback('用户名至少4位')
    }else{
      callback()
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" layout='inline'>
        <Item label="用户名:" labelAlign='left' className='login-label'>
          {getFieldDecorator('username', {
            rules: [{ required: true, validator: this.checkUsername}],
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
            rules: [
              { 
                type:'string',
                required: true, 
                whitespace:true,
                message: '请输入密码' 
              },
              { 
                min:4,
                max:8,
                message: '密码必须是4到8位' 
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
              className='login-input'
            />,
          )}
        </Item>
        
        <Button type="primary" className="login-button" onClick={this.loginClick}>
        登录
        </Button>
        <Button type="primary"  className="login-button" onClick={this.resetClick}>
        重置
        </Button>
       
        
      </Form>
    );
  }
}

 LoginForm = Form.create()(LoginForm);





