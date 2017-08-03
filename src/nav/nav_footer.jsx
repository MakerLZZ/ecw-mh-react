import './nav_footer.css';
import React, {Component} from 'react';
import logo from './nav_img/logo110x55.png';
import {Link} from 'react-router-dom'

class NavFooter extends Component {
    render() {
        return (
            <div className='nav-footer'>
                <div className="nav-footer-logo">
                    <img className="nav-footer-logo-img" src={logo} alt='' />
                </div>
                <div className="nav-footer-search-box">
                    <div className="search-box">
                        <form action="/more_goods" method="">
                            <input type="text" id="searchword" name="findText" />
                            <button className="search-box-button" type="submit" >搜索</button>
                        </form>
                    </div>
                    <div className="more-goods">
                        <Link to="/more_goods" target="" className="more_goods_button" style={{textDecoration:"none"}}>更多></Link>
                        {/* <form action="/Reception/MoreGoodsView"><button type="submit"></button></form> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default NavFooter;