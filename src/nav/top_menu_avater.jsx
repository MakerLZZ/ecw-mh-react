import React, {Component} from 'react';
import {Modal} from 'antd';
import avater from './nav_img/tool.png';
import './top_menu_avater.css';
import {Link} from 'react-router-dom'

class Avater extends Component {
    state = {
        ModalText: '真的不再逛逛了吗？',
        visible: false
    }
    showModal = () => {
        this.setState({visible: true});
    }
    handleOk = () => {
        this.setState({ModalText: 'The modal will be closed after two seconds', confirmLoading: true});
        setTimeout(() => {
            this.setState({visible: false, confirmLoading: false});
        }, 1000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({visible: false});
    }

    render() {
        // const {visible, confirmLoading, ModalText} = this.state;
        const {confirmLoading, ModalText} = this.state;
        return (
            <div className='top-menu-avater'>
                <div className='item-avater'>
                    <Link to="/avatar">
                        <img src={avater} alt='' />
                    </Link>
                </div>
                <div className='item-detail'>
                    <Link to="/person_center" className='nav-avater-a' style={{textDecoration:"none"}}>
                        <span>信息管理</span>
                    </Link>
                </div>
                <div className='item-logout'>
                    <a className='nav-avater-a' onClick={this.showModal}>注销</a>
                    <Modal
                        title="提示"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        width='250px'
                        key={this.state.newKey}>
                        <p>{ModalText}</p>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default Avater