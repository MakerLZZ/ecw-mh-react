import React, {Component} from 'react';
import './cartPage_model.css'
import PropTypes from 'prop-types';
import {Checkbox,message} from 'antd'
import CartPageItem from './cartPage_item'
import GoodsImg from './cart_page_img/goods_img.png'
import $ from 'jquery'

const cartAll = [
    {
        'key': 0,
        'id': '0',
        'cartItemImgSrc': GoodsImg,
        'cartItemTitle': 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'cartItemUnit': 19.00,
        'cartItemNum': 10,
        'cartItemInventory': 520,
    }, {
        'key': 1,
        'id': '1',
        'cartItemImgSrc': GoodsImg,
        'cartItemTitle': 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'cartItemUnit': 1.00,
        'cartItemNum': 120,
        'cartItemInventory': 250,
    }, {
        'key': 2,
        'id': '2',
        'cartItemImgSrc': GoodsImg,
        'cartItemTitle': 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'cartItemUnit': 9.00,
        'cartItemNum': 1,
        'cartItemInventory': 20,
    },{
        'key': 3,
        'id': '3',
        'cartItemImgSrc': GoodsImg,
        'cartItemTitle': 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'cartItemUnit': 91.00,
        'cartItemNum': 12,
        'cartItemInventory': 20,
    }
];

class CartPageModel extends Component {
    static propsTypes = {
        perCenPageModel : PropTypes.any
    }

    state={
        allChecked:false,
        spanIconClassName:'right-span-icon-hidden',
        selectRowClassName:'cart-submit-row',
        selectedNum:0,
        tatalPrice:0.00,
    }

    componentWillMount(){
        this.props.perCenPageModel ? this.props.perCenPageModel.liActive('cart') : message.info("发生了未知的错误！")
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        if(e.target.checked){
            this.refs.item.checked();
        }else{
            this.refs.item.unChecked();
        }
        
    }

    mapCartItem=()=>{
        return cartAll.map(v => {
            return (
                <CartPageItem
                    id={v.id}
                    cartItemImgSrc={v.cartItemImgSrc}
                    cartItemTitle={v.cartItemTitle}
                    cartItemUnit={v.cartItemUnit}
                    cartItemNum={v.cartItemNum}
                    cartItemInventory={v.cartItemInventory}
                    key={v.key}
                    ref='item'></CartPageItem>
            )
        })
    }

    componentDidMount(){
        this.scrollRoll()
    }

    scrollRoll=()=>{
        var botLocDiv = this.refs.bottom_location;
        
        
        $(window).scroll( ()=> {
            console.log($(botLocDiv).offset().top + $(botLocDiv).height() - window.innerHeight)
            console.log(document.body.scrollTop)
            if ($(botLocDiv).offset().top + $(botLocDiv).height() - window.innerHeight > document.body.scrollTop) {
                this.setState({
                    selectRowClassName:'cart-submit-row'
                })
            }
            else {
                this.setState({
                    selectRowClassName:'cart-submit-row row-unfixed'
                })
            }
        })
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
                    {this.mapCartItem()}
                </div>
                <div className='cart-bottom-border' ref='bottom_location'></div>
                <div className={this.state.selectRowClassName}>
                    <div className='left'>
                        <Checkbox />
                        <a className='select-all'>全选</a>
                    </div>
                    <div className='left'>
                        <a className='delete-all'>删除</a>
                    </div>
                    <div className='right submit'>
                        <button className='submit-button'>结&nbsp;算</button>
                    </div>
                    <div className='right'>
                        <span className='right-span-title'>合计&nbsp;:</span>
                        <span className={this.state.spanIconClassName}>￥</span>
                        <span className='right-span-num'>{this.state.tatalPrice}</span>
                    </div>
                    <div className='right selected-num'>
                        <span>已选商品</span>
                        <span className='right-span-num'>{this.state.selectedNum}</span>
                        <span>件</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default CartPageModel;