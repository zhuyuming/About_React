import React from 'react'

const Index = React.createClass({
//保存数据
  save(e){
     var formData = {
         name:this.refs.name.value,
         age:this.refs.age.value,
         height:this.refs.height.value,
         weight:this.refs.weight.value
     }
     console.log(formData); 
  },
 
  render() {
    return (
      <div>
        <fieldset>
            <legend>基本信息</legend>
            <label>姓名：<input ref="name" type="text" /></label>
            <br/>
            <label>年龄：<input ref="age" type="text" /></label>
            <br/>
            <label>身高：<input ref="height" type="text" /></label>
            <br/>
            <label>体重：<input ref="weight" type="text" /></label>
        </fieldset>
        <button onClick={this.save}>提交</button>
      </div>
    );
  }
});

export default Index