import React, {Component} from 'react';
import axios from "axios"

class Axios extends Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            test: ""
        };
    }

    componentWillMount() {
        var _this = this;
        axios
            .get("http://localhost:21835/api/values/test")
            .then(function (response) {
                _this.setState({test: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div>{this.state.test}</div>
            </div>
        );
    }
}
export default App;
