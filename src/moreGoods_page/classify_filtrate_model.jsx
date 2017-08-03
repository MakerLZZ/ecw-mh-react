import React, {Component} from 'react';
import './classify_filtrate_model.css'
class ClassifyFiltrateModel extends Component {
    render() {
        return (
            <div className=''>
                <div className='total-classify-row'>
                    <ul className='tabs'>
                        <li className='tab'>
                            <a className='link selected' href="">所有宝贝</a>
                        </li>
                    </ul>
                </div>
                <div className='all-classify-menu'>
                    <div className='filtrate-condition-row'>
                        <div>所有分类></div>
                    </div>
                    <div className='filtrate-groups-box'>
                        <div className='group'>
                            <div>零食</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ClassifyFiltrateModel;