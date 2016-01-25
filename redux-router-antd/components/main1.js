import React from 'react'
import { Modal, Button,message,Timeline ,Row, Col,Tabs  } from 'antd';
import FormDemo from './form'
const TabPane = Tabs.TabPane;

const Main1 = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
    message.info('click info')
    console.log('点击了确定');
    this.setState({
      visible: false
    });
  },
  handleCancel() {
    this.setState({
      visible: false
    });
  },

  callback(e){
    console.log(e)
    //message.info('Tab change')
  },
	render() {
		return (
     <Row>
        <Col span="12" style={{border:'1px solid blue'}}>
          span12
        </Col>
        <Col span="6" style={{border:'1px solid blue'}}>
          span6
        </Col>
        <Col span="6" style={{border:'1px solid blue'}}>
          span6
        </Col>
      </Row>
		);
	}
});

export default Main1