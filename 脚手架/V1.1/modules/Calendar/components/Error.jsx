import React from 'react'

class Error extends React.Component {
  render() {
    console.log('Error',this.props.location.pathname)
    return (
      <div>
        <h2>Error ,Not Found Path  
            <span style={{color:'red'}}> {this.props.location.pathname}</span>
        </h2>
      </div>
    )
  }
}

module.exports = Error
