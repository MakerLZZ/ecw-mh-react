import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Modal,Icon} from 'antd'
import './top_menu_visitor.css'
import LoginBox from './login_box'
import PropTypes from 'prop-types'

class TopMenuVisitor extends Component {
    static propTypes = {
        className:PropTypes.string,
        login:PropTypes.func
    }

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
            <div className={this.props.className}>
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
                    <li className='cart'>
                        <Icon type="shopping-cart" className="shopping-cart-icon" />
                        <a disabled>购物车</a>
                    </li>
                    <li className='person_center'>
                        <a disabled>个人中心</a>
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
                            <LoginBox hideModal={()=> this.hideModal()} login={this.props.login} />
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
