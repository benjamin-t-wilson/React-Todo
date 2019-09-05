import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        {this.props.list.map(cv => {
          return <Todo todo={cv} key={cv.id} toggleItem={() => this.props.toggleItem(cv.name)} />;
        })}
      </div>
    );
  }
}

export default TodoList;
