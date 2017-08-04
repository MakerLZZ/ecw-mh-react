import React, {Component} from 'react';

class GroupRowItem extends Component {
    
    render() {
        return (
            <a className="item">
                <span className="text">{this.props.text}</span>
                {this.props.children}
            </a>
        );
    }
};

export default GroupRowItem;