import React, {Component} from 'react';
import {Form,Input,Radio,Select,Button} from 'antd';

const FormItem = Form.Item;
class AddressForm extends Component {
    render() {
        return (
            <Form>

            </Form>
        );
    }
};

const WrappedHorizontalLoginForm = Form.create()(AddressForm);
export default WrappedHorizontalLoginForm;