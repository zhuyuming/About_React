import React from 'react'
import { Timeline } from 'antd';

const Time = React.createClass({
	render() {
		return (
      <div style={{margin:'30px'}}>
        <Timeline>
        {
            this.props.todos.map(function (todo,index) {
                return  <Timeline.Item key={index}>Data: {todo.name}</Timeline.Item>
            })
        }
        </Timeline>
      </div>
		);
	}
});

export default Time