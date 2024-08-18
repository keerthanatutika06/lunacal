import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import './index.css';
import TodoItem from '../TodoItem';

class Todos extends Component {
  state = { todoList: [], todoInput: '', todoStatus: '' };

  onChangeTaskInput = event => {
    this.setState({ todoInput: event.target.value });
  };

  onChangeStatus = event => {
    this.setState({ todoStatus: event.target.value });
  };

  onAddButton = () => {
    const { todoInput, todoList, todoStatus } = this.state;
    let newtodo = {
      id: uuidv4(), 
      todoId: todoList.length + 1,
      text: todoInput,
      status: todoStatus,
    };

    this.setState({ todoList: [...todoList, newtodo], todoInput: '', todoStatus: '' });
  };

  onClickDeleteItem = id => {
    const { todoList } = this.state;
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: updatedTodoList });
  };

  render() {
    const { todoInput, todoList, todoStatus } = this.state;
    return (
      <div className="todo-container">
        <h1 className="heading">Todos</h1>
        
        <div className="todo-items-container">
          <p className="todo-form-title">Create Task</p>
          <div className="todo-input-container">
            <input
              type="text"
              placeholder="Enter task to be done?"
              value={todoInput}
              onChange={this.onChangeTaskInput}
              className="todo-input-field"
            />
            <button className="add-btn" onClick={this.onAddButton} type="button">
              Add
            </button>
          </div>

          <div className="checkbox-container">
            <div className="checkbox-item">
              <input
                type="radio"
                className="checkboxField"
                id="done"
                name="status"
                value="done"
                onChange={this.onChangeStatus}
                checked={todoStatus === 'done'}
              />
              <label htmlFor="done" className="checkbox-label">
                Done
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="radio"
                className="checkboxField"
                id="pending"
                name="status"
                value="pending"
                onChange={this.onChangeStatus}
                checked={todoStatus === 'pending'}
              />
              <label htmlFor="pending" className="checkbox-label">
                Pending
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="radio"
                className="checkboxField"
                id="in-progress"
                name="status"
                value="in-progress"
                onChange={this.onChangeStatus}
                checked={todoStatus === 'in-progress'}
              />
              <label htmlFor="in-progress" className="checkbox-label">
                In-progress
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="radio"
                className="checkboxField"
                id="completed"
                name="status"
                value="completed"
                onChange={this.onChangeStatus}
                checked={todoStatus === 'completed'}
              />
              <label htmlFor="completed" className="checkbox-label">
                Completed
              </label>
            </div>
          </div>

        </div>

        <div className="todos-list-container">
          <table className="todo-items-list">
            {todoList.map((eachtodo) => (
              <TodoItem
                key={eachtodo.id}
                todoDetails={eachtodo}
                onClickDeleteItem={this.onClickDeleteItem}
                statusClassName = {eachtodo.status}
              />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Todos;
