import React, {Component} from 'react';
import NavFooter from './footerNav'
// var jquery = require('fsfsfsf')
var msg = [
    {
        'icon': 'icon-home',
        'name': '首页',
        'index':0,
    }, {
        'icon': 'icon-bulb',
        'name': '发现',
        'index':1,
    }, {
        'icon': 'icon-person',
        'name': '我的',
        'index':2,
    }
];

class Nav extends Component {
    
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            index: 0
        };
    }


    getInitailState() {
        return{
            index:0,
        }
    }

    handleClick(i) {
        this.state = {
            index: i,
        };
    }
    
    test() {
        return msg.map(v => {
            return (
                <NavFooter 
                    className='nav'
                    onClick={function(){this.handleClick(v.index)}}
                    state={this.state.index==v.index?'footer-nav active':'footer-nav'}
                    icon={v.icon} key={v.name}>
                    {v.name}
                </NavFooter>
            )
        })
    };

    render() {
        return (
            <div className="Nav">
                {this.test()}
            </div>
        );
    }
}
export default Nav;