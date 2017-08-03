import React, {Component} from 'react';
import HomePageTop from './home_top';
import HomePageGoodsList from './home_goods_list';
import BackTop from './back_top';
import './home_page_model.css';

class HomePageModel extends Component {
  render() {
    return (
      <div className="home-page">
          <HomePageTop/>
          <HomePageGoodsList/>
          <BackTop/>
      </div>
    );
  }
}
export default HomePageModel;