import React, {Component} from 'react';
import GoodsDetailLeft from './goodsDetail_left';
import GoodsDetailRight from './goodsDetail_right';
// import ShowGoodsModel from './show_goods_model';
import './goodsDetail_page_model.css'

class GoodsDetailPageModel extends Component {
    render() {
        return (
            <div className='goods-detail-page' id={this.props.no}>
                <GoodsDetailLeft/>
                <GoodsDetailRight/>
            </div>
        );
    }
};

export default GoodsDetailPageModel;