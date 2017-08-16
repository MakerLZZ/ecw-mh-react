import React, {Component} from 'react';
import './cartPage_model.css'
import PropTypes from 'prop-types';
import {Checkbox,message} from 'antd'
import CartPageItem from './cartPage_item'

class CartPageModel extends Component {
    static propsTypes = {
        perCenPageModel : PropTypes.any
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    componentWillMount(){
        this.props.perCenPageModel ? this.props.perCenPageModel.liActive('cart') : message.info("发生了未知的错误！")
    }

    render() {
        return (
            <div className='cart-page-model'>
                <div className='cart-title'>
                    <ul>
                        <li className='all'>
                            <Checkbox onChange={(e)=>this.onChange(e)}/>
                            <span>全选</span>
                        </li>
                        <li className='goods-detail'>商品信息</li>
                        <li className='unit'>单价</li>
                        <li className='num'>数量</li>
                        <li className='price'>金额</li>
                        <li className='option'>操作</li>
                    </ul>
                </div>
                <div className='clear-both'></div>
                <div className='cart-item-box'>
                    <CartPageItem/>
                </div>
            </div>
        );
    }
};

export default CartPageModel;