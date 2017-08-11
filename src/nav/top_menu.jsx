import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import './top_menu.css';
import Avatar from './top_menu_avater'
import Cart from './top_menu_cart'
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const cart_num = "29"

class TopMenu extends Component {
    state = {
    current: 'mail',
  }

  handleClick = (e) => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <SubMenu title={<span>tb2308752_2013<Icon type="down" className="top-menu-down" /></span>} className='user-account'>
          <Avatar/>
        </SubMenu>
        
        <Menu.Item key="home">
          <Link to="/">网站首页</Link>
        </Menu.Item>

        <SubMenu key="cart" title={
            <span>
              <Icon type="shopping-cart" className="shopping-cart-icon" />
              购物车{cart_num}
              <Icon type="down" className="top-menu-down" />
              </span>
          } className='user-cart'>
          <Cart/>
        </SubMenu>

        <Menu.Item key="person_center">
          <Link to="/person_center" target="">个人中心</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
