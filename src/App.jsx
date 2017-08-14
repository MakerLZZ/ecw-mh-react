import React, {Component} from 'react';
import './App.css';
import TopMenu from './nav/top_menu';
import TopMenuVisitor from './nav/top_menu_visitor';
import NavFooter from './nav/nav_footer'
import PageBottom from './nav/page_bottom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePageModel from './home_page/home_page_model'
import MoreGoodsPageModel from './moreGoods_page/moreGoods_page_model'
import GoodsDetailPageModel from './goodsDetail_page/goodsDetail_page_model'
import RegisterPageModel from './register_page/register_page_model'

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

class App extends Component {
    state = {

    }
    
    setTopMenuVisitor(topMenuVisitor) {
        if (!this.state.topMenuVisitor) 
            this.setState({topMenuVisitor})
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <TopMenuVisitor
                            ref={this.setTopMenuVisitor.bind(this)}/>
                        <TopMenu/>
                        <NavFooter/>
                        <Route exact path="/" component={HomePageModel}/>
                        <Route exact path="/more_goods" component={MoreGoodsPageModel}/>
                        <Route
                            exact
                            path="/goods_detail/:id"
                            render={({match}) =>< GoodsDetailPageModel no = {
                            match.params.id
                        } />}/>
                        <Route
                            exact
                            path="/register"
                            render={() =>< RegisterPageModel topMenuVisitor = {
                            this.state.topMenuVisitor
                        } > </RegisterPageModel>}/>
                        <Route path="/avatar" component={Avater_}/>
                        <Route path="/person_center" component={PersonCenter}/>
                        <Route path="/cart" component={Cart}/>
                        <PageBottom/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
