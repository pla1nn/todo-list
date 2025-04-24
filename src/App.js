import './App.css';
import { Component } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import todos from './todos.json';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';


class App extends Component {
  state = {
    todos: todos,
    showModal: false,
  }

  openModal= () => {
    this.setState({showModal: true})
  }

  closeModal= () => {
    this.setState({showModal: false})
  }

  deleteToDo = (toDoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== toDoId)
    }))
  }

  render() {
    const {todos} = this.state
    return (
      <>
      <Header openModal={this.openModal}/>
      {
        this.state.showModal && <Modal closeModal={this.closeModal}>kajfkjwq kajsjh jbhfhxu</Modal>
      }
      
      <TaskList onDeleteToDo={this.deleteToDo} todos={todos}/>
      <Dropdown/>
      </>
    )
  }
}

export default App;