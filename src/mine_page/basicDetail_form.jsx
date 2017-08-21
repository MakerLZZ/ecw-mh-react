import React, {Component} from 'react';
import {Form,Input,Icon} from 'antd';

const FormItem = Form.Item;
class BasicDetailForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // var userNameInput = values.userName;
                // var passwordInput = values.password;
                // if (userNameInput === userName && passwordInput === password) {
                //     message.success('欢迎来到吃货世界！');
                //     this.props.hideModal();
                //     //window.location.href='/';
                //     this.props.login();
                // }else if(userNameInput !==userName){
                //     message.error('没有找到此账号，请核实后再试');
                // }else if(userNameInput === userName&&passwordInput!==password ){
                //     message.error('密码输错了哟，亲！');
                // }
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入你的账号!',
                                whitespace:true,
                            }
                        ]
                    })(
                        <Input
                        prefix={<Icon type="user" style = {{ fontSize: 13 }}/>}
                        placeholder="账号"/>
                    )}
                </FormItem>
            </Form>
        );
    }
};

const WrappedHorizontalLoginForm = Form.create()(BasicDetailForm);
export default WrappedHorizontalLoginForm;