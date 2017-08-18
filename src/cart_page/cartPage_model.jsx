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
        submitButtonClassName:'submit-button',
        selectRowClassName:'cart-submit-row',
        selectedNum:0,
        tatalPrice:0.00,
    }

    componentWillMount(){
        this.props.perCenPageModel ? this.props.perCenPageModel.liActive('cart') : message.info("发生了未知的错误！")
    }

    //全选
    onChange(e) {
        if(e.target.checked){
            cartAll.forEach((v,i)=>{
                this.refs[`item${i}`].checked();
            })
            this.setState({
                allChecked:true,
                spanIconClassName:'right-span-icon',
                submitButtonClassName:'submit-button-able',
            },()=>this.checkSelectItem())
        }else{
            cartAll.forEach((v,i)=>{
                this.refs[`item${i}`].unChecked();
            })
            this.setState({
                allChecked:false,
                spanIconClassName:'right-span-icon-hidden',
                submitButtonClassName:'submit-button',
            },()=>this.checkSelectItem())
        }
    }

    onChangeA(){
        if(this.state.allChecked){
            cartAll.forEach((v,i)=>{
                this.refs[`item${i}`].unChecked();
            })
            this.setState({
                allChecked:false,
                spanIconClassName:'right-span-icon-hidden',
                submitButtonClassName:'submit-button',
            },()=>this.checkSelectItem())
        }else{
            cartAll.forEach((v,i)=>{
                this.refs[`item${i}`].checked();
            })
            this.setState({
                allChecked:true,
                spanIconClassName:'right-span-icon',
                submitButtonClassName:'submit-button-able',
            },()=>this.checkSelectItem())
        }
    }

    mapCartItem=()=>{
        return cartAll.map((v,i) => {
            return (
                <CartPageItem
                    id={v.id}
                    cartItemImgSrc={v.cartItemImgSrc}
                    cartItemTitle={v.cartItemTitle}
                    cartItemUnit={v.cartItemUnit}
                    cartItemNum={v.cartItemNum}
                    cartItemInventory={v.cartItemInventory}
                    key={v.key}
                    ref={`item${i}`}
                    checkSelectItem={()=>this.checkSelectItem()}></CartPageItem>
            )
        })
    }

    iOrNAllChecked=()=>{
        var allItemChecked = true;
        var haveItemChecked = false;
        cartAll.forEach((v,i)=>{
            if(!this.refs[`item${i}`].iOrNChecked()){
                allItemChecked = false
            }
            if(this.refs[`item${i}`].iOrNChecked()){
                haveItemChecked=true
            }
        })

        if(allItemChecked){
            this.setState({
                allChecked:true
            })
        }else{
            this.setState({
                allChecked:false
            })
        }

        if(haveItemChecked){
            this.setState({
                spanIconClassName:'right-span-icon',
                submitButtonClassName:'submit-button-able',
            })
        }else{
            this.setState({
                spanIconClassName:'right-span-icon-hidden',
                submitButtonClassName:'submit-button',
            })
        }
    }

    //计算选择了多少件商品
    staSelectedNum=()=>{
        var num = 0;
        cartAll.forEach((v,i)=>{
            if(this.refs[`item${i}`].iOrNChecked()){
                ++num
            }
        })
        this.setState({
            selectedNum:num
        })
    }
    
    //计算选择的商品的总价
    staTatalPrice=()=>{
        var tatalPrice = 0.00;
        cartAll.forEach((v,i)=>{
            if(this.refs[`item${i}`].iOrNChecked()){
                tatalPrice += this.refs[`item${i}`].state.price;
            }
        })
        this.setState({
            tatalPrice:tatalPrice
        })
    }

    checkSelectItem(){
        this.iOrNAllChecked();
        this.staTatalPrice();
        this.staSelectedNum();
    }

    scrollRoll=()=>{
        var botLocDiv = this.refs.bottom_location;
        $(window).scroll( ()=> {
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

    componentDidMount(){
        this.scrollRoll();
    }

    render() {
        return (
            <div className='cart-page-model'>
                <div className='cart-title'>
                    <ul>
                        <li className='all'>
                            <Checkbox onChange={(e)=>this.onChange(e)} checked={this.state.allChecked} />
                            <a onClick={()=>this.onChangeA()} className='all-a'>全选</a>
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
                        <Checkbox onChange={(e)=>this.onChange(e)} checked={this.state.allChecked} />
                        <a className='select-all' onClick={()=>this.onChangeA()} >全选</a>
                    </div>
                    <div className='left'>
                        <a className='delete-all'>删除</a>
                    </div>
                    <div className='right submit'>
                        <button className={this.state.submitButtonClassName}>结&nbsp;算</button>
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