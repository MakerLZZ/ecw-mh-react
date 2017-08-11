import React, {Component} from 'react';
import './login_box.css'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import PropTypes from 'prop-types'
const userName = '123'
const password = '123'
const FormItem = Form.Item;
class LoginBox extends Component {
    static propTypes = {
        visible: PropTypes.bool
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var userNameInput = values.userName;
                var passwordInput = values.password;
                if (userNameInput === userName && passwordInput === password) {
                    alert('登录成功');
                    this.setState({
                        visible:false
                    })
                }else if(userNameInput !=userName){
                    alert('用户名不存在');
                }else if(userNameInput === userName&&passwordInput!=password ){
                    alert('密码错误');
                }
                console.log('Received values of form: '+userName+'/'+password);
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入你的账号!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                            placeholder="账号"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入你的密码!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                            type="password"
                            placeholder=""/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
};

const WrappedHorizontalLoginForm = Form.create()(LoginBox);
export default WrappedHorizontalLoginForm;