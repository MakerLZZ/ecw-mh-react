import React, {Component} from 'react';
import './order_item.css'
import GoodsImg from './order_page_img/goods_img.png'

class OrderItem extends Component {
    state={
        condition:'待付款',
        condition_button:'付款'
    }
    
    render() {
        return (
            <div className='order-item-box'>
                <div className='number-row'>
                    <span className='date'>2017-08-18</span>
                    <span>订单号：20200220202020202</span>
                </div>
                <div className='detail-row'>
                    <ul>
                        <li className='li-0'>
                            <div className='img'>
                                <img src={GoodsImg} alt=""/>
                            </div>
                            <div className='detail'>
                                【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭
                            </div>
                        </li>
                        <li className='li-1'><span>￥</span><span>10.00</span></li>
                        <li className='li-1'><span>12</span></li>
                        <li className='li-1 total'><span>￥</span><span>120.00</span></li>
                        <li className='li-2 condition'>
                            <div className='li-2-condition'>
                                <div className='condition-str'>
                                    <span>{this.state.condition}</span>
                                </div>
                                <div className='condition-button'>
                                    <button>{this.state.condition_button}</button>
                                </div>
                            </div>
                        </li>
                        <li className='li-2 check-detail'><a>查看详情</a></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default OrderItem;