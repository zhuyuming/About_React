import React from 'react';

export default class TodoItem extends React.Component {
  handlerCompleted(){
    this.props.completeTodo(this.props.todo.id);
  }
  handlerDelete(){
     this.props.deleteTodo(this.props.todo.id);
  }
  
  /*
    返回样式
  */
  renderStyle(){
    return {
       color: this.props.todo.completed ? 'lightgrey' : 'black',
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    return (
      <div style={this.renderStyle()}>
        <div>{this.props.todo.text}</div>
        <div>
          <button onClick={::this.handlerCompleted}>Completed</button>
          <button onClick={::this.handlerDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
