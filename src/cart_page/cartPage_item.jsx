import React, {Component} from 'react';
import './cartPage_item.css'
import Goods from './cart_page_img/goods_img.png'
import {Checkbox} from 'antd'

class CartPageItem extends Component {
    render() {
        return (
            <div className='cart-item' id=''>
                <ul>
                    <li className='detail'>
                        <div className='detail-row'>
                            <div className='detail-item detail-checkbox'><Checkbox/></div>
                            <div className='detail-item detail-img'><img src={Goods}/></div>
                            <div className='detail-item detail-title'>
                                Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食
                            </div>
                        </div>
                    </li>
                    <li className='unit'>
                        <div>
                            ￥9.50
                        </div>
                    </li>
                    <li className='num'>
                        <div>
                            -+
                        </div>
                    </li>
                    <li className='price'>
                        <div>
                            ￥57.00
                        </div>
                    </li>
                    <li className='option'>
                        <div>
                            <a>删除</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
};

export default CartPageItem;