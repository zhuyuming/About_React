import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Button,message,Timeline ,Row, Col,Tabs  } from 'antd';
import FormDemo from './form'
import configureStore from '../redux/store/configureStore'
import Time from './time'


const store = configureStore(); 
const TabPane = Tabs.TabPane;

const Main = React.createClass({
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
  addTodo(e){
    if(e.target.value && e.which === 13){
        this.props.actions.addTodo(e.target.value);
        e.target.value = "";
        let that = this;
        setTimeout(function(){
         that.props.actions.addTodo('时间:'+new Date());
        },1000)
    }
  },
  callback(e){
    console.log(e)
    //message.info('Tab change')
  },
	render() {
		return (
			 <Row>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="TAB1" key="1">
               <Button type="primary" onClick={this.showModal}>添加</Button>
               <input style={{marginLeft:'20px'}} onKeyDown={this.addTodo}/>
                <Modal title="表单" visible={this.state.visible}
                  onOk={this.handleOk} onCancel={this.handleCancel}>
                </Modal>
                <Time todos={this.props.todos}/>
            </TabPane>
            <TabPane tab="TAB2" key="2">
               <Row>
                <Col span="12" style={{border:'1px solid blue',height:'40px'}}> span12 </Col>
                <Col span="12" style={{border:'1px solid blue',height:'40px'}}> span12 </Col>
              </Row>
              <Row>
                <Col span="12" style={{border:'1px solid red',height:'40px'}}> span12 </Col>
                <Col span="13" style={{border:'1px solid red',height:'40px'}}> span12 </Col>
                <Col span="6" style={{border:'1px solid red',height:'40px'}}> span6 </Col>
                <Col span="6" style={{border:'1px solid red',height:'40px'}}> span6 </Col>
                <Col span="12" style={{border:'1px solid red',height:'40px'}}> span12 </Col>
              </Row>
              <Row>
                <Col span="4" style={{border:'1px solid pink',height:'40px'}}> span4 </Col>
                <Col span="6" style={{border:'1px solid pink',height:'40px'}}> span6 </Col>
                <Col span="16" style={{border:'1px solid pink',height:'40px'}}> span16 </Col>
              </Row>
              <Row>
                <Col span="12" style={{border:'1px solid blue',height:'40px'}}> span12 </Col>
                <Col span="6" style={{border:'1px solid blue',height:'40px'}}> span6 </Col>
                <Col span="6" style={{border:'1px solid blue',height:'40px'}}> span6 </Col>
              </Row>
            </TabPane>
            <TabPane tab="TAB3" key="3">
            </TabPane>
        </Tabs>
      </Row>
		);
	}
});

export default Main