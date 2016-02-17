import React from 'react'
import Time from './time'

const Index = React.createClass({
   getInitialState() {
    return window.STORE
   },
  //保存数据
  save(e){
     var formData = {
         name:this.refs.name.value,
         age:this.refs.age.value,
         height:this.refs.height.value,
         weight:this.refs.weight.value
     }
     this.reset();
     
     window.STORE.list = window.STORE.list.concat(formData);
     
    //注意，如果不重新复制state，不会触发render方法     
     this.setState(window.STORE)
  },
  //重置
  reset(){
    this.refs.name.value = ''
    this.refs.age.value = ''
    this.refs.height.value = ''
    this.refs.weight.value = ''
  },
  
 //Ajax 获取数据
 getData(){
   let that = this;
   let url = "http://zhongxia.duapp.com/rest/getCategory.do";
   $.getJSON(url,function (data, textStatus, jqXHR) {
       window.STORE.list = window.STORE.list.concat(data);
       that.setState(window.STORE)
     }
   );  
 },
 
  render() {
    console.log(this.state.list)
    return (
      <div>
        <fieldset>
            <legend>基本信息</legend>
            <label>姓名：<input ref="name"  type="text" /></label>
            <br/>
            <label>年龄：<input ref="age" type="text" /></label>
            <br/>
            <label>身高：<input ref="height" type="text" /></label>
            <br/>
            <label>体重：<input ref="weight" type="text" /></label>
        </fieldset>
        
        <button onClick={this.save}>提交</button>
        <br/>
        <button onClick={this.getData}>获取Ajax数据</button>
        <ul>
            {
                this.state.list.map(function(item,index){
                    return <li key={index}>{index} data:{item.name}</li>
                })
            }
        </ul>
        <Time todos={this.state.list}/>
      </div>
    );
  }
});

export default Index