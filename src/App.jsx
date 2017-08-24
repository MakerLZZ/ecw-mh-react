import React, {Component} from 'react';
import './App.css';
import './App_nav.css';
import {message} from 'antd'
import TopMenu from './nav/top_menu';
import TopMenuVisitor from './nav/top_menu_visitor';
import NavFooter from './nav/nav_footer'
import PageBottom from './nav/page_bottom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePageModel from './home_page/home_page_model'
import MoreGoodsPageModel from './moreGoods_page/moreGoods_page_model'
import GoodsDetailPageModel from './goodsDetail_page/goodsDetail_page_model'
import RegisterPageModel from './register_page/register_page_model'
import PersonalCenterPageModel from './personalCenter_page/personal_center_model'
import CartPageModel from './cart_page/cartPage_model'
import OrderPageModel from './order_page/orderPage_model'
import MinePageModel from './mine_page/minePage_model'
import OrderSubmitPageModel from './order_submit_page/order_submit_model'
class App extends Component {
    state = {
        loginSuccess:false,
        needFooter: true
    }

    hideFooter(){
        this.setState({needFooter: false})
    }

    showFooter(){
        this.setState({needFooter: true})
    }

    setTopMenuVisitor(topMenuVisitor) {
        if (!this.state.topMenuVisitor) 
            this.setState({topMenuVisitor})
    }

    setPerCenPageModel(perCenPageModel) {
        if (!this.state.perCenPageModel) 
            this.setState({perCenPageModel})
    }

    login(){
        this.setState({
            loginSuccess: true,
        },()=>{
            //回调函数
        });
    }

    logout(){
        message.success('注销成功！');
        this.setState({
            loginSuccess: false
        });
    }
    
    navFooterHidden(nowPath){
        const path = '/register'
        if(nowPath===path){
            this.setState({
                navFooterHidden:true
            })
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <TopMenuVisitor
                            ref={this.setTopMenuVisitor.bind(this)} className={this.state.loginSuccess?'top-menu-visitor-hidden':'top-menu-visitor'} login={()=>this.login()} />
                        <TopMenu className={this.state.loginSuccess?'top-menu':'top-menu-hidden'} logout={()=>this.logout()} />
                        {this.state.needFooter ?<NavFooter/>:null }
                        <Route 
                            exact 
                            path="/"
                            render={
                                () =><HomePageModel
                                loginSuccess={this.state.loginSuccess}
                                topMenuVisitor = {this.state.topMenuVisitor}/>
                            }
                        />
                        <Route exact path="/more_goods" component={MoreGoodsPageModel}/>
                        <Route
                            exact
                            path="/goods_detail/:id"
                            render={({match}) =><GoodsDetailPageModel no = {match.params.id}/>}
                        />
                        <Route
                            exact
                            path="/register"
                            render={
                                () =>
                                <RegisterPageModel
                                    showFooter={this.showFooter.bind(this)}
                                    hideFooter={this.hideFooter.bind(this)}
                                    topMenuVisitor = {this.state.topMenuVisitor}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/personal_center/:str"
                            render={
                                () =>
                                <PersonalCenterPageModel ref={this.setPerCenPageModel.bind(this)}/>
                            }
                        />
                        <Route 
                            path="/personal_center/cart" 
                            render={
                                ()=>
                                <CartPageModel
                                    perCenPageModel={this.state.perCenPageModel}
                                />
                            }
                        />
                        <Route 
                            path="/personal_center/order" 
                            render={
                                ()=>
                                <OrderPageModel
                                    perCenPageModel={this.state.perCenPageModel}
                                />
                            }
                        />
                        <Route 
                            path="/personal_center/mine" 
                            render={
                                ()=>
                                <MinePageModel
                                    perCenPageModel={this.state.perCenPageModel}
                                />
                            }
                        />
                        <Route 
                            path="/order_submit" 
                            render={
                                ()=>
                                <OrderSubmitPageModel/>
                            }
                        />

                        <PageBottom/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
