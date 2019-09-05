import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.scss";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = event => {
    this.setState({ item: event.target.value });
  };

  addItem = (event) => {
    let newObj = {
      id: Date.now(),
      name: this.state.item,
      completed: false
    };
    this.setState({ list: [...this.state.list, newObj] });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addItem();
    this.setState({ item: "" });
  };

  toggleItem = item => {
    this.setState({
      list: this.state.list.map(cv => {
        if (item === cv.name) {
          return { ...cv, completed: !cv.completed };
        }
        return cv;
      })
    });
  };

  clearComplete = event => {
    event.preventDefault();
    this.setState({ list: this.state.list.filter(cv => !cv.completed) });
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          list={this.state.list}
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearComplete={this.clearComplete}
        />
          <TodoList list={this.state.list} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
