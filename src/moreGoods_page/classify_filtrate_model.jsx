import React, {Component} from 'react';
import {Icon} from 'antd';
import './classify_filtrate_model.css'

const SHOWTEXT = "显示筛选";
const CLOSETEXT = "收起筛选";

class ClassifyFiltrateModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFiltrateButton: SHOWTEXT,
        }
    }

    handleShowClick=()=>{
        var nowText = this.state.showFiltrateButton;
        if(nowText===SHOWTEXT){
            this.setState({showFiltrateButton:CLOSETEXT})
        }else{
            this.setState({showFiltrateButton:SHOWTEXT})
        }
    }


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
                        <a className="expand-collapse" onClick={this.handleShowClick}>
                            <span>
                                <span>{this.state.showFiltrateButton}</span>
                                <Icon type="down" className="expand-collapse-down" />
                            </span>
                            
                            {/* <span>
                                <span>收起筛选</span>
                                <span></span>
                            </span> */}
                        </a>
                        <span>所有分类></span>
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