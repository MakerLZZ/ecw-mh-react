import React, {Component} from 'react';
import './back_top.css';
import UserAvatar from './home_page_img/user_avatar.png';

class HomeTopLogin extends Component {
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
                        Hi 李真 您好！
                    </div>
                </div>
                <div className="indent-condition">
                    <div className="indent-condition">
                        <a href="">
                            <div className="indent-num">1</div>
                            <div>待收货</div>
                        </a>
                        <a href="">
                            <div className="indent-num">2</div>
                            <div>待发货</div>
                        </a>
                        <a href="">
                            <div className="indent-num">3</div>
                            <div>待付款</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTopLogin