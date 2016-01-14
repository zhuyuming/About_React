import React from 'react';

/*
//常规写法
let Hello = React.createClass({
	        render() {
	            return ( < div > Hello World! ~ React < /div>);
	            }
	        });
*/

// ES6语法
class Hello extends React.Component{
   render(){
       return ( < div > Hello World! zhongxia ~ React < /div>);
   }
}

export default Hello;