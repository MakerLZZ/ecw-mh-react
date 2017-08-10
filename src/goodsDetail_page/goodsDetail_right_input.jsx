import React, {Component} from 'react';
import {InputNumber} from 'antd'

class DetailInput extends React.Component {
    onChange = (e) => {
        const {value} = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this
                .props
                .onChange(value);
        }
    }
    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const {value, onBlur, onChange} = this.props;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            onChange({
                value: value.slice(0, -1)
            });
        }
        if (onBlur) {
            onBlur();
        }
    }
    render() {
        const {value} = this.props;
        return (<InputNumber
            {...this.props}
            onChange={this.onChange}
            onBlur={this.onBlur}
            placeholder="Input a number"
            maxLength="25"/>);
    }
}

export default DetailInput;