import React, {Component} from 'react';
import './goodsDetail_left.css'
class GoodsDetailLeft extends Component {
    render() {
        return (
            <div className='goods-detail-left'>
                <div className='top'>1</div>
                <div className='bottom'>
                    <ul>
                        <li><div className='pic'><a href=""><img src="" alt=""/></a></div></li>
                        <li><div className='pic'><a href=""><img src="" alt=""/></a></div></li>
                        <li><div className='pic'><a href=""><img src="" alt=""/></a></div></li>                        
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default GoodsDetailLeft;