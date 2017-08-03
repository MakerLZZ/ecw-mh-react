import React, {Component} from 'react';
import ClassifyFiltrateModel from './classify_filtrate_model';
import SortRowModel from './sort_row_model';
import ShowGoodsModel from './show_goods_model';
import './moreGoods_page_model.css'

class MoreGoodsPageModel extends Component {
    render() {
        return (
            <div className='more_goods_page'>
                <ClassifyFiltrateModel/>
                <SortRowModel/>
                <ShowGoodsModel/>
            </div>
        );
    }
};

export default MoreGoodsPageModel;