import React, {Component} from 'react';
import './group_row.css'
import GroupRowItem from './group_row_item'
import ShowMoreButton from './show_more_button'
import PropTypes from 'prop-types'

var showMoreStyle = {
    height: "auto",
    maxHeight: "102px",
    overflow: "auto"
}

var closeShowMoreStyle = {
    height: "36px",
    overflow: "hidden"
}

class GroupRow extends Component {
    static propTypes = {
        data: PropTypes.array,
    }

    

    mapGroupRowItem = () => {
        return this.props.data.map(function(v){
            return(
                <GroupRowItem text={v} key={v} />
            )
        })
    }

    state = {
        close: true
    }

    handleClose(){
        const currentClose = this.state.close;
        this.setState({close: !currentClose})
    }

    render() {
        return (
            <div className='group-row' id={this.props.id}>
                <div className="head">
                    {this.props.classifyName}
                </div>
                <div className="body">
                    <div className="items" style={this.state.close ?closeShowMoreStyle:showMoreStyle }>
                        <div className="items-inner">
                            {this.mapGroupRowItem()}
                        </div>
                    </div>
                </div>
                <div className="foot">
                      <ShowMoreButton handleClose={()=> this.handleClose()} close={this.state.close} className="show-more" />  
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default GroupRow;