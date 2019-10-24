import React, { Component } from 'react' ; 

class TodoList extends Component {
    createTask(item) {
        return <li key={item.key}>{item.text}</li>
    }
    
    
    render() { return (
        <div className="todoListMain">
        <div className="header">
        <form className="form-group" onSubmit={this.props.addItem}>
        <input 
        className="form-control"
        type="text" 
        placeholder="example : Forking someone's repo"
        ref = {this.props.inputElement} 
        value={this.props.currentItem.text}
        onChange={this.props.handleInput}
        />
        
        <button className="btn btn-success" type="submit">  Add Task  </button>
        </form>
        <br/>
        </div>
        </div>
        )
    }
}

export default TodoList ; 