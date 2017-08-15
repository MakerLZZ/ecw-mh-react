import React, {Component} from 'react';
import './sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul>
                    <li>个人中心</li>
                    <li>购物车</li>
                    <li>我的订单</li>
                    <li>个人资料</li>
                </ul>
            </div>
        );
    }
};

export default Sidebar;