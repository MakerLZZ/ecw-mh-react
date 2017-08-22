import React, {Component} from 'react';
import './avatar_model.css'
class AvatarModel extends Component {
    
    render() {
        return (
            <div className='avatar-box'>
                <div class="box_row">
                    <form id="myform" action="/Reception/SaveAvatar" method="post"  enctype="multipart/form-data">
                        <a href="javascript:;" class="file gradient">
                            本地上传
                            <input id="load_img" type="file" name="avatar" onchange="change()" />
                        </a>
                    </form>            
                </div>
                <div class="box_row tips">
                    <div>您上传的头像会自动生成三种尺寸,</div>
                    <div>请注意中小尺寸的头像是否清晰</div>
                </div>
                <div class="box_row">
                    <div class="row">
                        <div >
                            <img id="preview1" src="~/Fonts/Image/Avatar/大尺寸.png" />
                        </div>
                        <div class="img-size">大尺寸头像，160x160像素</div>
                    </div>
                    <div class="row row_col">
                        <div class="img-row">
                            <img id="preview2" src="~/Fonts/Image/Avatar/大尺寸.png" />
                        </div>
                        <div class="img-size">
                            <div>中尺寸头像</div>
                            <div>60x60像素</div>
                        </div>
                        <div class="img-row">
                            <img id="preview3" src="~/Fonts/Image/Avatar/大尺寸.png" />
                        </div>

                        <div class="img-size">
                            <div>小尺寸头像</div>
                            <div>30x30像素</div>
                        </div>
                        
                    </div>
                </div>
                <div><button id="save" onclick="SaveAvatar()">保存</button></div>
            </div>
        );
    }
};

export default AvatarModel;