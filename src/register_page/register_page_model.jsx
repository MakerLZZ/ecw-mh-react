import React, {Component} from 'react';
import {Steps, Button, message} from 'antd'
import './register_page_model.css'
import FirstContent from './first_content'

const Step = Steps.Step

class RegisterPageModel extends Component {
    state={
        current: 0
    }

    let ={
        account:'',
        password:0,
    }

    getAccount(e){
        this.account=e
        const current = this.state.current + 1;
        this.setState({current});
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }
    
    render() {
        const firstContent = (
            <FirstContent getAccount={(e)=> this.getAccount(e)} />
        )

        const steps = [
            {
                title: '设置用户名',
                content: firstContent
            }, {
                title: 'Second',
                content: 'Second-content'
            }, {
                title: 'Last',
                content: 'Last-content'
            }
        ];

        return (
            <div className='register-page'>
                <div>
                    注册页面
                </div>
                <div>
                    <Steps current={this.state.current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                    <div className="steps-action">
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('注册成功!')}>完成</Button>
                    }
                    {/* {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    } */}
                    </div>
                </div>
            </div>
        );
    }
};

export default RegisterPageModel;