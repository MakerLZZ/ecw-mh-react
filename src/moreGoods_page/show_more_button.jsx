import React, {Component} from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types'

class ShowMoreButton extends Component {

    static propTypes = {
        close: PropTypes.bool,
        handleClose: PropTypes.func
    }

    render() {
        return (
            <a className="show-more" onClick={this.props.handleClose}>
                <span>
                    <span>{this.props.close ? '更多':'收起'}</span>
                    <Icon type="down" className="show-more-down"/>
                </span>
            </a>
        );
    }
};

export default ShowMoreButton;