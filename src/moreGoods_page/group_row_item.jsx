import React, {Component} from 'react';
import './group_row_item.css'
class GroupRowItem extends Component {
    
    choseCondition(classifyName,text){
        alert(classifyName+text);
    }

    render() {
        return (
            <a className="item" 
                onClick={()=>this.choseCondition(this.props.classifyName,this.props.text)}
                >
                <span className="text">{this.props.text}</span>
                {this.props.children}
            </a>
        );
    }
};

export default GroupRowItem;