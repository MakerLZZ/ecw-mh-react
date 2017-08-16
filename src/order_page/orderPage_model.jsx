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
				{/* {this.props.perCenPageModel ? this.props.perCenPageModel.liActive('order') : null} */}
				我的订单
			</div>
		);
	}

	componentWillUnmount(){

	}
};

export default OrderPageModel;