import React, {Component} from 'react';

class Text extends Component {
    state = {
        'error_state': false,
        'error_message': ''
    }
    handleClick(classifyName, text) {
        let error_message = '';
        error_message += '<li>错误信息一</li>';
        error_message += '<li>错误信息二</li>';
        error_message += '<li>错误信息三</li>';
        this.setState({'error_state': true, 'error_message': error_message});
    }

    render() {
        let alert_class = this.state.error_state
            ? 'alert alert-danger'
            : 'aler hidden';
        return (
            <div>
                <button onClick={this.handleClick}>添加html</button>
                <div
                    className={alert_class}
                    dangerouslySetInnerHTML={{
                    __html: this.state.error_message
                }}></div>
            </div>
        );
    }
};

export default Text;