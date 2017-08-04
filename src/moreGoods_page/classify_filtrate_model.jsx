import React, {Component} from 'react';
import {Icon} from 'antd';
import './classify_filtrate_model.css'
import GroupRow from './group_row'

const SHOWTEXT = "显示筛选";
const CLOSETEXT = "收起筛选";

var group_rows=[
    {
        'key': 0,
        'group_row_num': 'group_row_0',
        'classifyName': "零食/坚果/特产：",
    },{
        'key': 1,
        'group_row_num': 'group_row_1',
        'classifyName': "品牌：",
    },{
        'key': 2,
        'group_row_num': 'group_row_2',
        'classifyName': "口味：",
    },{
        'key': 3,
        'group_row_num': 'group_row_3',
        'classifyName': "原产地：",
    }]

var group={
    0:[
    '鸭肉类零食',
    '鸡肉类零食',
    '膨化食品',
    '传统糕点',
    '糖果',
    '牛肉类',
    '鱼系列',
    '西式糕点',
    '猪肉类',
    '素肉',
    '豆腐干',
    '猪肉脯',
    '蛋卷饼干',
    '鱿鱼系列',
    '曲奇饼干',
    '营养（消化）饼干',
    '夹心饼干',
    '果仁巧克力'
], 1: [
    '鸭肉类零食',
    '鸡肉类零食',
    '膨化食品',
    '传统糕点',
    '糖果',
    '牛肉类',
    '鱼系列',
    '西式糕点',
    '猪肉类',
    '素肉',
    '豆腐干',
    '猪肉脯',
    '蛋卷饼干',
    '鱿鱼系列',
    '曲奇饼干',
    '营养（消化）饼干',
    '夹心饼干',
    '果仁巧克力'
], 2: [
    '鸭肉类零食',
    '鸡肉类零食',
    '膨化食品',
    '传统糕点',
    '糖果',
    '牛肉类',
    '鱼系列',
    '西式糕点',
    '猪肉类',
    '素肉',
    '豆腐干',
    '猪肉脯',
    '蛋卷饼干',
    '鱿鱼系列',
    '曲奇饼干',
    '营养（消化）饼干',
    '夹心饼干',
    '果仁巧克力'
],3: [
    '鸭肉类零食',
    '鸡肉类零食',
    '膨化食品',
    '传统糕点',
    '糖果',
    '牛肉类',
    '鱼系列',
    '西式糕点',
    '猪肉类',
    '素肉',
    '豆腐干',
    '猪肉脯',
    '蛋卷饼干',
    '鱿鱼系列',
    '曲奇饼干',
    '营养（消化）饼干',
    '夹心饼干',
    '果仁巧克力'
]
}


class ClassifyFiltrateModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFiltrateButton: CLOSETEXT,
            groupsBox : "block",
            icon:"up"
        }
    }

    handleShowClick=()=>{
        var nowText = this.state.showFiltrateButton;
        if(nowText===SHOWTEXT){
            this.setState({showFiltrateButton:CLOSETEXT,groupsBox:"block",icon:"up"})
        }else{
            this.setState({showFiltrateButton:SHOWTEXT,groupsBox:"none",icon:"down"})
        }
    }

    mapGroupRowNums=()=>{
        return group_rows.map((v,index) => {
            return (
                <GroupRow
                    data={group}
                    classifyName={v.classifyName}
                    id={v.id}
                    key={v.key}></GroupRow>
            )
        })
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
                                <Icon type={this.state.icon} className="expand-collapse-down" />
                            </span>
                        </a>
                        <span>所有分类></span>
                    </div>
                    <div className='filtrate-groups-box' style={{display:this.state.groupsBox}}>
                        <div className='group'>
                            {this.mapGroupRowNums()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ClassifyFiltrateModel;