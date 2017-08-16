import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {message} from 'antd'
class MinePageModel extends Component {
    static propsTypes = {
        perCenPageModel : PropTypes.any
    }

    componentWillMount(){
        this.props.perCenPageModel ? this.props.perCenPageModel.liActive('mine') : message.info("发生了未知的错误！")        
    }

    render() {
        return (
            <div>
                {/* {this.props.perCenPageModel ? this.props.perCenPageModel.liActive('mine') : null} */}
                我的资料
            </div>
        );
    }
};

export default MinePageModel;