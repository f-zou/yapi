import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AddInterfaceForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    catdata: PropTypes.object
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Category name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'please input category name!'
              }
            ],
            initialValue: this.props.catdata ? this.props.catdata.name || null : null
          })(<Input placeholder="category name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="note">
          {getFieldDecorator('desc', {
            initialValue: this.props.catdata ? this.props.catdata.desc || null : null
          })(<Input placeholder="note" />)}
        </FormItem>

        <FormItem className="catModalfoot" wrapperCol={{ span: 24, offset: 8 }}>
          <Button onClick={this.props.onCancel} style={{ marginRight: '10px' }}>
            cancel
          </Button>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(AddInterfaceForm);
