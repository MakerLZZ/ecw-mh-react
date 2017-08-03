import React, { Component } from 'react';
import bottom from "./nav_img/page_bottom.png"
class PageBottom extends Component {
    render () {
        return(
            <div className="bottom" style={{textAlign:"center"}}>
                <img src={bottom} alt=""/>
            </div>
        );
    }
};

export default PageBottom;