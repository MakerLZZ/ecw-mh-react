import React, {Component} from 'react';
import HomePageTop from './home_top';
import HomePageGoodsList from './home_goods_list';
import BackTop from './back_top';
import './home_page_model.css';
import PropTypes from 'prop-types'

class HomePageModel extends Component {
    static propsTypes = {
        loginSuccess: PropTypes.bool,
        topMenuVisitor: PropTypes.any
    }
    render() {
        return (
            <div className="home-page">
                <HomePageTop
                    loginSuccess={this.props.loginSuccess}
                    topMenuVisitor={this.props.topMenuVisitor}/>
                <HomePageGoodsList/>
                <BackTop/>
            </div>
        );
    }
}
export default HomePageModel;