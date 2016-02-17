import React from 'react'

const Add1 = React.createClass({
    add(e){
        if(e.target.value && e.which === 13){
            this.props.actions.add(e.target.value);
            e.target.value = "";
        }
    },
	render() {
		return (
			<div>
                <h2>Welcome index</h2>
                <label>
                    <span>添加 </span>
                    <input type="text"  onKeyDown={this.add}/>
                </label>
                <ul>
                {
                    this.props.items.map(function (item,index) {
                        return  <li key={Math.random()}>{index+1}.{item.text}</li>
                    })
                }
                </ul>
            </div>
		);
	}
});

export default Add1