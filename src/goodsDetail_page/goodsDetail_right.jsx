import React, {Component} from 'react';
import {Icon} from 'antd';
import './goodsDetail_right.css'
import './animate.css'
import GoodsDetailRightImg from './goodsDetail_right_img'

import bottom_img_1 from './goodsDetail_img/indent.png'
import bottom_img_2 from './goodsDetail_img/seven.png'
import bottom_img_3 from './goodsDetail_img/safety.png'
import bottom_img_4 from './goodsDetail_img/antd.png'
import bottom_img_5 from './goodsDetail_img/card.png'
import bottom_img_6 from './goodsDetail_img/add.png'

var msg_1 = [
    {
        'key': 0,
        'img_src': bottom_img_1,
        'img_title': '订单险'
    }, {
        'key': 1,
        'img_src': bottom_img_2,
        'img_title': '7天无理由'
    }, {
        'key': 2,
        'img_src': bottom_img_3,
        'img_title': '质量安全'
    }
]

var msg_2 = [
    {
        'key': 3,
        'img_src': bottom_img_4,
        'img_title': '蚂蚁花呗'
    }, {
        'key': 4,
        'img_src': bottom_img_5,
        'img_title': '信用卡支付'
    }, {
        'key': 5,
        'img_src': bottom_img_6,
        'img_title': '集分宝'
    }
]


var goodsDetail = [
    {
        'goodsTitle':'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'goodsPrice':'29.80',
        'goodsSalse':'1',
        'goodsTaste':'黑胡椒味',
        'goodsInventory':'5'
    }
]

class GoodsDetailRight extends Component {
    MapItem = (flag) => {
        if (flag) {
            return msg_1.map(v => {
                return (<GoodsDetailRightImg src={v.img_src} title={v.img_title} key={v.key}/>)
            })
        } else {
            return msg_2.map(v => {
                return (
                    <GoodsDetailRightImg src={v.img_src} title={v.img_title} key={v.key}></GoodsDetailRightImg>
                )
            })
        }
    }

    state={
        value:1,
    }

    
    render() {
        return (
            <div className='goods-detail-right'>
                <div className='goods-title'>
                    <h3 className='goods-main-title'>{goodsDetail[0].goodsTitle}</h3>
                </div>
                <ul className='goods-price'>
                    <li className='goods-price-title'>
                        <span className='goods-price-type'>价格</span>
                    </li>
                    <li className='goods-price-num'>
                        <strong>
                            <span className='rmb'>￥</span>
                            <span className='rmb-num'>{goodsDetail[0].goodsPrice}</span>
                        </strong>
                    </li>
                    <li className='goods-sales'>
                        <div>
                            <div className='goods-sales-num'>
                                <span>{goodsDetail[0].goodsSalse}</span>
                            </div>
                            <div>
                                <span>交易成功</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='sep-line'></div>
                <div className='goods-taste'>
                    <span className='goods-taste-type'>口味</span>
                    <span className='goods-taste-title'>{goodsDetail[0].goodsTaste}</span>
                </div>
                <div className='goods-select-num'>
                    <div>
                        <span className='goods-select-type'>数量</span>
                        <span className='goods-select-stock'>
                            <a className='disable-reduce reduce'>-</a>
                            <input type="text" className='text'  maxLength='8'/>
                            <a className='disable-increase increase'>+</a>
                            件
                        </span>
                        <span className='goods-select-inventory'>(库存{goodsDetail[0].goodsInventory}件)</span>
                    </div>
                </div>
                <div className='buy-box'>
                    <div className='buy'>
                        <a href="" className='btn-a'>立即购买</a>
                    </div>
                    <div className='add'>
                        <a href="" className='btn-a'><Icon
                            type="shopping-cart"
                            style={{marginRight: 5}}/>加入购物车</a>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='bottom-row'>
                        <div className='bottom-title'>
                            <span>承诺</span>
                        </div>
                        <div className='bottom-a'>
                            {this.MapItem(true)}
                        </div>
                    </div>
                    <div className='bottom-row'>
                        <div className='bottom-title'>
                            <span>支付</span>
                        </div>
                        <div className='bottom-a'>
                            {this.MapItem(false)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default GoodsDetailRight;