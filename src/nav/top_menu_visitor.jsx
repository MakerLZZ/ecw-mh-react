import {Menu} from 'antd';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;

class TopMenuVisitor extends Component {
    state = {
        current: 'mail'
    }

    handleClick = (e) => {
        this.setState({current: e.key});
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="login">
                    <Link to="/">亲，请登录</Link>
                </Menu.Item>
                <Menu.Item key="register">
                    <Link to="/register">免费注册</Link>
                </Menu.Item>
                <Menu.Item key="home">
                    <Link to="/">网站首页</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default TopMenuVisitor;
