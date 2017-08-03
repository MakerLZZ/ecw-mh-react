import React, {Component} from 'react';
import {BackTop} from 'antd';
import './back_top.css';
import BackTopImg from './home_page_img/back_top.png'
class BackTop_ extends Component {
    render() {
        return (
            <div className="">
                <BackTop>
                    <div className="ant-back-top-inner">
                        <img src={BackTopImg} alt=""/>
                    </div>
                </BackTop>
            </div>
        );
    }
}

export default BackTop_