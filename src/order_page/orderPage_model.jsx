import React, {Component} from 'react';
import './orderPage_model.css'
import PropTypes from 'prop-types'
import {message} from 'antd'
import GoodsImg from './order_page_img/goods_img.png'
import OrderTitleItem from './order_title_item'
import OrderItem from './order_item'
const orderTitles = [
    {
        'key': 0,
		'liClassName': 'li li-focus',
		'aClassName':'indent-nav-a a-focus',
		'titleName':'所有订单'
    }, {
        'key': 1,
        'liClassName': 'li',
		'aClassName':'indent-nav-a',
		'titleName':'待付款'
    },{
        'key': 2,
        'liClassName': 'li',
		'aClassName':'indent-nav-a',
		'titleName':'待发货'
    },{
        'key': 3,
        'liClassName': 'li',
		'aClassName':'indent-nav-a',
		'titleName':'待收货'
    },{
        'key': 4,
        'liClassName': 'li',
		'aClassName':'indent-nav-a',
		'titleName':'交易成功'
    }
];

const orders = [
    {
        'key': 0,
        'no': '0',
        'img_src': GoodsImg,
        'goods_price': '0.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 1,
        'no': '1',
        'img_src': GoodsImg,
        'goods_price': '1.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 2,
        'no': '2',
        'img_src': GoodsImg,
        'goods_price': '2.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 3,
        'no': '3',
        'img_src': GoodsImg,
        'goods_price': '3.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 4,
        'no': '4',
        'img_src': GoodsImg,
        'goods_price': '4.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 5,
        'no': '5',
        'img_src': GoodsImg,
        'goods_price': '5.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 6,
        'no': '6',
        'img_src': GoodsImg,
        'goods_price': '6.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 7,
        'no': '7',
        'img_src': GoodsImg,
        'goods_price': '7.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 8,
        'no': '8',
        'img_src': GoodsImg,
        'goods_price': '8.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }, {
        'key': 9,
        'no': '9',
        'img_src': GoodsImg,
        'goods_price': '9.00',
        'goods_sales': 50,
        'goods_title': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'goods_location': '浙江杭州'
    }
];

class OrderPageModel extends Component {
	static propsTypes = {
		perCenPageModel: PropTypes.any
	}

	componentWillMount(){
		this.props.perCenPageModel ? this.props.perCenPageModel.liActive('order') : message.info("发生了未知的错误！")
	}

	handleLiClick(condition){
		orderTitles.forEach((v,i)=>{
			if(this.refs[`item${i}`].state.titleName===condition){
				this.refs[`item${i}`].thisFocus()
			}else{
				this.refs[`item${i}`].thisUnFocus()
			}
		})
	}
	
	mapOrderTitleItem=()=>{
		return orderTitles.map((v,i) => {
            return (
                <OrderTitleItem
					key={v.key}
					liClassName={v.liClassName}
					aClassName={v.aClassName}
					titleName={v.titleName}
					ref={`item${i}`}
                    handleLiClick={(condition)=>this.handleLiClick(condition)}
					></OrderTitleItem>
            )
        })
	}

	render() {
		return (
			<div className='order-page-model'>
				<div className='indent-nav'>
					<ul>
						{this.mapOrderTitleItem()}
					</ul>
				</div>
				<div className='indent-nav-line'></div>
				<div className='title-row'>
					<ul>
						<li className='li-0'>宝贝</li>
						<li className='li-1'>单价</li>
						<li className='li-1'>数量</li>
						<li className='li-1'>实付款</li>
						<li className='li-2'>交易状态</li>
						<li className='li-2'>交易操作</li>
					</ul>
				</div>
				{/* order-box */}
				<div className='indent-list'>
					<OrderItem/>
					{/*遍历每一条订单信息*/}
				</div>
			</div>
		);
	}

	componentWillUnmount(){

	}
};

export default OrderPageModel;