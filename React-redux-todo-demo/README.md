#坑爹的ES6  20150117
  1. ES6 通过 babel 解析成 ES5
  2. babel 是有分等级的，或者啥的，在根目录下配置一个  .babelrc 什么意思？ 配置 stage = 0 ,则在类中，使用 普通变量可以，不设置，就报错
  ```
  export default class TodoInput extends React.Component {
  //这里如果不配置 .babelrc 就会报错
  state = {
    text: '',
  }
  
  handleSubmit(e){
    e.preventDefault();
    console.log(this);
  }
  
  render() {
    console.log(this)
    // ::this.handleSubmit    //意思是把 this 传到 里面，在handleSubmit方法里面，this 是指向外部本身的this
    return (
      <form onSubmit={::this.handleSubmit}>
        <input type="text" placeholder="add new todo" value={this.state.text}/>
        <button>Add Todo</button>
      </form>
    )
  }
}
  ```
  
***