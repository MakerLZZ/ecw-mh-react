import React, {Component} from 'react';
import './App.css';
import TopMenu from './nav/top_menu';
import NavFooter from './nav/nav_footer'
import PageBottom from './nav/page_bottom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePageModel from './home_page/home_page_model'
import MoreGoodsPageModel from './moreGoods_page/moreGoods_page_model'
import GoodsDetailPageModel from './goodsDetail_page/goodsDetail_page_model'

const Home = ({match}) => (
    <div>
        <HomePageModel/>
        <Route path={`${match.url}/:branchId`} component={Branch}/>
    </div>
)

const MoreGoods = ({match}) => (
    <div>
        <MoreGoodsPageModel/>
        <Route path={`${match.url}/:branchId`} component={Branch}/>
    </div>
)

const GoodsDetail = ({match}) => {
    return (
        <div>
            <GoodsDetailPageModel no={match.params.id} />
            <Route path={`${match.url}/:branchId`} component={Branch}/>
        </div>
    )

}

const Branch = ({match}) => {
    console.log(match);
    return (
        <div>
            <h3>{match.params.branchId}</h3>
        </div>
    )
}

const Avater_ = ({match}) => {
    console.log(match);
    return (
        <div>
            <h1>AvatarPage</h1>
        </div>
    )
}

const PersonCenter = ({match}) => {
    console.log(match);
    return (
        <div>
            <h1>PersonCenterPage</h1>
        </div>
    )
}

const Cart = ({match}) => {
    console.log(match);
    return (
        <div>
            <h1>CartPage</h1>
        </div>
    )
}

const Basic = () => (
    <Router>
        <div>
            <TopMenu/>
            <NavFooter/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/more_goods" component={MoreGoods}/>
            <Route exact path="/goods_detail/:id" component={GoodsDetail}/>
            <Route path="/avatar" component={Avater_}/>
            <Route path="/person_center" component={PersonCenter}/>
            <Route path="/cart" component={Cart}/>
            <PageBottom/>
        </div>
    </Router>
)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Basic/>
            </div>
        );
    }
}
export default App;
