import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="content">Your next todo:</label>
        <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default AddTodo;