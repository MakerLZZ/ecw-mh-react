import React, { Component } from 'react';
import './page_bottom.css'
// import bottom from "./nav_img/page_bottom.png"
class PageBottom extends Component {
    render () {
        return(
            <div className="page-bottom">
                <div>
                    <span className='title'>吃货网</span><span className='chat'>|</span>
                    <span className='title'>奇点俱乐部</span><span className='chat'>|</span>
                    <span className='title'>JAVASCRIPT</span><span className='chat'>|</span>
                    <span className='title'>REACT</span><span className='chat'>|</span>
                    <span className='title'>前端</span><span className='chat'>|</span>
                    <span className='title'>电商网站</span>
                </div>
                <div className='row-2'><span className='versions'>© 2016-2017 ChiHuo.com 版权所有</span></div>
            </div>
        );
    }
};

export default PageBottom;