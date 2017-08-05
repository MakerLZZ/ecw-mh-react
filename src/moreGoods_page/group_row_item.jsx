import React, {Component} from 'react';
import './group_row_item.css'
class GroupRowItem extends Component {
    choseCondition(){
        alert("asdasd");
    }
    render() {
        return (
            <a className="item" onClick={()=>this.choseCondition()}>
                <span className="text">{this.props.text}</span>
                {this.props.children}
            </a>
        );
    }
};

export default GroupRowItem;