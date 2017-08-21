import React, {Component} from 'react';
import BasicDetailForm from './basicDetail_form'
class BasicDetailModel extends Component {
    
    render() {
        return (
            <div className='basic-detail-box'>
                <div className='top'>
                    <div><span>亲爱的xxxxxxxxx，填写真实的资料，有助于好友找到你哦</span></div>
                    <div>
                        <div>当前头像</div>
                        <div><img alt='' /></div>
                    </div>
                </div>
                <BasicDetailForm/>
            </div>
        );
    }
};

export default BasicDetailModel;