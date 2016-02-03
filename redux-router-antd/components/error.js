import React from 'react'

const ErrorPage =  React.createClass({
	render() {
		return (
			<div style={{position:'absolute',bottom:0,left:0,right:0,top:'80px',textAlign:'center'}}>
       	 <h1>Error Not Found 404</h1>
       	 <a href="#">返回首页</a>
      </div>
		);
	}
});

export default ErrorPage