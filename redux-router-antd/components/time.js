import React from 'react'
import { Timeline } from 'antd';

const Time = React.createClass({
	render() {
		return (
      <div style={{margin:'30px'}}>
  			<Timeline>
        {
          this.props.todos.map(function (todo) {
            return  <Timeline.Item key={todo.id}>创建服务现场 {todo.text}</Timeline.Item>
          })
        }
        </Timeline>
      </div>
		);
	}
});

export default Time