import React from 'react'

const Footer = React.createClass({
	render() {
		return (
			<div className="ant-layout-footer" style={{position:'absolute',bottom:0,left:0,right:0,textAlign:'center'}}>
       Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
      </div>
		);
	}
});

export default Footer