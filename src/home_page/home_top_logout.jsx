import React, {Component} from 'react';
import './back_top.css';
import UserAvatar from './home_page_img/default_avatar.png';

class HomeTopLogout extends Component {
    render() {
        return (
            <div className="user-area">
                <div className="user-photo">
                    <a href="/Reception/BasicDataView">
                        <img src={UserAvatar} alt=""/>
                    </a>
                </div>
                <div className="user-name">
                    <div>
                        Hi 用户您好！您还未登陆！
                    </div>
                </div>
                <div className="indent-condition">
                    <div className="not-login">
                        <div className="not-login-button">
                            <a href="/Login/LoginView">登录</a>
                        </div>
                        <div className="not-login-button">
                            <a href="/Login/LoginView">注册</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTopLogout