import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h1>Add a new To-Do item!</h1>
        <input
          name="task"
          type="text"
          placeholder="Task Name"
          value={this.props.item}
          onChange={this.props.handleChange}
        />
        <div className="buttonGroup">
        <button>Add To List</button>
        <button onClick={this.props.clearComplete}>Clear Completed</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
