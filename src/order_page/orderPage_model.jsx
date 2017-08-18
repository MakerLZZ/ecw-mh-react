import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {message} from 'antd'
class OrderPageModel extends Component {
	static propsTypes = {
		perCenPageModel: PropTypes.any
	}

	componentWillMount(){
		this.props.perCenPageModel ? this.props.perCenPageModel.liActive('order') : message.info("发生了未知的错误！")
    }

	render() {
		return (
			<div>
				订单页
				{/* option-row */}
				{/* all-title */}
				{/* order-box */}
			</div>
		);
	}

	componentWillUnmount(){

	}
};

export default OrderPageModel;