import React, {Component} from 'react';
// import ClassifyFiltrateModel from './classify_filtrate_model';
// import SortRowModel from './sort_row_model';
// import ShowGoodsModel from './show_goods_model';
import './goodsDetail_page_model.css'

class GoodsDetailPageModel extends Component {
    render() {
        return (
            <div className='goods_detail_page' id={this.props.no}>
                
                {/* <ClassifyFiltrateModel/>
                <SortRowModel/>
                <ShowGoodsModel/> */}
                商品详情
            </div>
        );
    }
};

export default GoodsDetailPageModel;