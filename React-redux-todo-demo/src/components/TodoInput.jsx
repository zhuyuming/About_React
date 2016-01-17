import React from 'react';

export default class TodoInput extends React.Component {
  
  state = {
    text: '',
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.text){
      this.props.addTodo(this.state.text);
      this.setState({
        text: ''
      });
    }
  }
  
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  
  render() {
    // ::this.handleSubmit    //意思是把 this 传到 里面，在handleSubmit方法里面，this 是指向外部本身的this
    return (
      <form onSubmit={::this.handleSubmit}>
        <input  type="text" 
                placeholder="add new todo" 
                onChange = {::this.handleChange}
                value={this.state.text} />
        <button>Add Todo</button>
      </form>
    )
  }
}
