import React from 'react'

const Add = React.createClass({
    getInitialState() {
        return {
            items:[{text:'zhongxia'}]
        }
    },
    add(e){
        if(e.target.value && e.which === 13){
            let items = this.state.items;
            items.push({text:e.target.value});
            this.setState({items: items});
            e.target.value = "";
        }
    },
	render() {
		return (
			<div>
                <h2>Welcome index</h2>
                <label>
                    添加
                    <input type="text"  onKeyDown={this.add}/>
                </label>
                <ul>
                {
                    this.state.items.map(function (item,index) {
                        return  <li key={Math.random()}>{index+1}.{item.text}</li>
                    })
                }
                </ul>
            </div>
		);
	}
});

export default Add