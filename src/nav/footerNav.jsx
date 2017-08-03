import React, { Component } from 'react';

class NavFooter extends Component {
    render () {
        return(
            <div className={this.props.className || ''}>
                <a className={this.props.state} onClick={this.onClick} >
                    <i className={this.props.icon + 'iconfont'}></i>
                    {this.props.children}
                </a>
            </div>
        );
    }
};

export default NavFooter;