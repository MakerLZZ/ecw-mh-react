import React, {Component} from 'react';
class Devide extends Component {
    handleClick = () => {
        import ('./test/test.js').then(({moduleA}) => {
            alert(moduleA);
        }).catch(err => {});
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Load</button>
            </div>
        );
    }
}

export default Devide;