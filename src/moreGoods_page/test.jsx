import React, {Component} from 'react';

class Text extends Component {
    state = {
        error_state: false,
        error_message: ''
    }

    handleClick=()=> {
        const error_state_now =this.state.error_state;
        this.setState({error_state: !error_state_now, error_message:'<a href="">{classifyName+text}<span>x</span></a>'});
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