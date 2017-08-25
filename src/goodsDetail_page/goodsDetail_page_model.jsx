import React, {Component} from 'react';
import GoodsDetailLeft from './goodsDetail_left';
import GoodsDetailRight from './goodsDetail_right';
import './goodsDetail_page_model.css'
import PropTypes from 'prop-types'
class GoodsDetailPageModel extends Component {
    static propsTypes = {
        loginSuccess: PropTypes.bool
    }
    render() {
        return (
            <div className='goods-detail-page' id={this.props.no}>
                <GoodsDetailLeft/>
                <GoodsDetailRight loginSuccess={this.props.loginSuccess} />
            </div>
        );
    }
};

export default GoodsDetailPageModel;