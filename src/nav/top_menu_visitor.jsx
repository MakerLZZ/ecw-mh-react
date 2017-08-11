import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Modal} from 'antd'
import './top_menu_visitor.css'
import LoginBox from './login_box'

class TopMenuVisitor extends Component {
    state = {
        visible: false
    }
    showModal = () => {
        this.setState({visible: true})
    }
    hideModal = () => {
        this.setState({visible: false})
    }
    render() {
        return (
            <div className=''>
                <ul className='top-menu-visitor'>
                    <li className='login'>
                        <a onClick={this.showModal}>亲，请登录</a>
                    </li>
                    <li className='register'>
                        <Link to="/register">免费注册</Link>
                    </li>
                    <li className='home'>
                        <Link to="/">网站首页</Link>
                    </li>
                </ul>
                <div className='fenkai'></div>
                <div>
                    <Modal
                        className='login-box'
                        title='密码登录'
                        visible={this.state.visible}
                        onCancel={this.hideModal}
                        footer={null}
                        width='300px'>
                            <LoginBox visible={this.state.visible}/>
                    </Modal>
                </div>
            </div>

        // <Menu     onClick={this.handleClick}     selectedKeys={[this.state.current]}
        //  mode="horizontal">     <Menu.Item key="login">         <Link
        // to="/">亲，请登录</Link>     </Menu.Item>     <Menu.Item key="register"> <Link
        // to="/register">免费注册</Link>     </Menu.Item>     <Menu.Item key="home"> <Link
        // to="/">网站首页</Link>     </Menu.Item> </Menu>
        );
    }
}

export default TopMenuVisitor;
