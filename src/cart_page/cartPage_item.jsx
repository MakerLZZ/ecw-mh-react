import React, {Component} from 'react';
import './cartPage_item.css'
import {Checkbox} from 'antd'

class CartPageItem extends Component {
    state={
        value: this.props.cartItemNum,
        price: this.props.cartItemNum*this.props.cartItemUnit,
        reduceClassName: 'reduce',
        increaseClassName: 'increase',
        tipClassName: 'goods-num-tip hidden',
        itemClassName:'cart-item',
        checked:false
    }

    componentWillMount() {
        if(this.state.value===1){
            this.setState({reduceClassName: 'disable-reduce reduce'})
        }
    }

    onChange(o) {
        var unit = this.props.cartItemUnit
        this.setState({tipClassName: 'goods-num-tip hidden'})
        const reg = /^[0-9]*[1-9][0-9]*$/;
        var newValue = parseInt(o.target.value,10);
        var minValue = 1;
        var maxValue = this.props.cartItemInventory;
        if (newValue >= maxValue) {  
            //this.refs.numInput.select();
            this.setState({
                value: maxValue,
                price: maxValue*unit,
                increaseClassName: 'disable-increase increase',
                reduceClassName: 'reduce', tipClassName: 'goods-num-tip'
            })
        } else if (newValue === minValue) {
            this.setState({
                value: newValue,
                price: newValue*unit,
                reduceClassName: 'disable-reduce reduce',
                increaseClassName: 'increase'
            })
        } else if ((!isNaN(newValue) && reg.test(newValue)) || newValue.toString() === '') {
            this.setState({
                value: newValue,
                price: newValue*unit,
                increaseClassName: 'increase'
            })
        }
    }

    handleReduceClick() {
        var unit = this.props.cartItemUnit
        var currentValue = this.state.value;
        var minValue = 1;
        var maxValue = this.props.cartItemInventory;
        if (currentValue <= maxValue) {
            this.setState({tipClassName: 'goods-num-tip hidden'})
        }
        var valueReduce = currentValue - 1;

        if (valueReduce > minValue) {
            this.setState({
                value: valueReduce,
                price: valueReduce*unit
            })
        } else if (valueReduce === minValue) {
            this.setState({
                value: valueReduce,
                price: valueReduce*unit,
                reduceClassName: 'disable-reduce reduce'
            })
        }
        if (valueReduce < maxValue) {
            this.setState({increaseClassName: 'increase'})
        }
    }

    handleIncreaseClick() {
        var unit = this.props.cartItemUnit
        var minValue = 1;
        var maxValue = this.props.cartItemInventory;
        var currentValue = this.state.value;
        if (currentValue <= maxValue) {
            this.setState({tipClassName: 'goods-num-tip hidden'})
        }
        var valueIncrease = currentValue + 1;
        if (valueIncrease < maxValue) {
            this.setState({
                value: valueIncrease,
                price: valueIncrease*unit
            })
        } else if (valueIncrease === maxValue) {
            this.setState({
                value: valueIncrease,
                price: valueIncrease*unit,
                increaseClassName: 'disable-increase increase'
            })
        }
        if (valueIncrease > minValue) {
            this.setState({reduceClassName: 'reduce'})
        }
    }

    deleteItem(){
        this.setState({
            itemClassName:'cart-item-hidden'
        })
        //异步删除购物车该条信息
    }

    checkboxChange(e){
        var checked = e.target.checked;
        if(checked){
            this.setState({
                itemClassName:'cart-item cart-item-checked',
                checked:true
            })
        }else{
            this.setState({
                itemClassName:'cart-item',
                checked:false
            })
        }
    }

    checked(){
        this.setState({
            itemClassName:'cart-item cart-item-checked',
            checked:true
        })
    }

    unChecked(){
        this.setState({
            itemClassName:'cart-item',
            checked:false
        })
    }

    render() {
        return (
            <div className={this.state.itemClassName} id=''>
                <ul>
                    <li className='detail'>
                        <div className='detail-row'>
                            <div className='detail-item detail-checkbox'><Checkbox checked={this.state.checked} onChange={(e)=>this.checkboxChange(e)} /></div>
                            <div className='detail-item detail-img'><img src={this.props.cartItemImgSrc} alt='' /></div>
                            <div className='detail-item detail-title'>
                                {this.props.cartItemTitle}
                            </div>
                        </div>
                    </li>
                    <li className='unit'>
                        <div className='unit-row'>
                            <span>￥{this.props.cartItemUnit}</span>
                        </div>
                    </li>
                    <li className='num'>
                        <div className='num-row'>
                            <div className='goods-num-box'>
                                <span className='goods-num-select'>
                                    <a
                                        className={this.state.reduceClassName}
                                        onClick={() => this.handleReduceClick()}>-</a>
                                    <input ref="numInput"
                                        onChange={(e) => this.onChange(e)}
                                        type="text"
                                        className='text'
                                        value={this.state.value}
                                        maxLength='8'/>
                                    <a
                                        className={this.state.increaseClassName}
                                        onClick={() => this.handleIncreaseClick()}>+</a>
                                </span>
                            </div>
                            <div className={this.state.tipClassName}>
                                最多只能购买{this.props.cartItemInventory}件
                            </div>
                        </div>
                    </li>
                    <li className='price'>
                        <div className='price-row'>
                            <span>￥{this.state.price}</span>
                        </div>
                    </li>
                    <li className='option'>
                        <div className='option-row'>
                            <a onClick={()=>this.deleteItem()}>删除</a>
                        </div>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
};

export default CartPageItem;