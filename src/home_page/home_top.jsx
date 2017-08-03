import React, {Component} from 'react';
import {Carousel} from 'antd';
import './home_top.css';
import ad from './home_page_img/ad.png';
import UserAvatar from './home_page_img/user_avatar.png';
import TopGoods from './home_page_img/top_goods.png';

import Ad_Img_1 from './home_page_img/carousel_ad_1.png'
import Ad_Img_2 from './home_page_img/carousel_ad_2.png'

class HomePageTop extends Component {
    render() {
        return (
            <div className="home-page-top">
                <div className="carousel-ad">
                    <Carousel autoplay>
                        <div>
                            <img src={Ad_Img_1} alt=""/>
                        </div>
                        <div>
                            <img src={Ad_Img_2} alt=""/>
                        </div>
                        <div>
                            <img src={Ad_Img_1} alt=""/>
                        </div>
                        <div>
                            <img src={Ad_Img_2} alt=""/>
                        </div>
                    </Carousel>
                </div>
                <div className="center-ad">
                    <img src={ad} alt=""/>
                </div>
                <div className="home-page-top-right">
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

                    <div className="goods-max">
                        <div className="goods-max-title">
                            <span>热门推荐</span>
                        </div>
                        <a href="" target="_blank">
                            <div className="goods">
                                <div className="goods-detail-max" id="goods-detail-max-img"><img src={TopGoods} alt="" /></div>
                                <div className="goods-detail-max" id="goods-detail-max-name">神厨小福贵</div>
                                <div className="goods-detail-max" id="goods-detail-max-price">销量：20</div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomePageTop;