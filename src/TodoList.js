import React, { Component } from 'react' ; 
import track, { useTracking } from 'react-tracking';

@track({composant: 'add_button'})
class TodoList extends Component {
    state = {
        numClicks: 0,
        numIgnoreds: 0,
        numCaracter: 0 
    };
    
    // class members usage (with state)
    @track((props, state) => ({
        event: "click",
        count: state.numClicks,
        ignored: state.numIgnoreds
    }))
    handleClickTrack = () => {
        this.setState({
            numClicks: this.state.numClicks +1,
            numCaracter: 0
        })
    };
    
    @track((props, state) => ({ 
        event: 'ignored',
        count: state.numClicks,
        ignored: state.numIgnoreds
    }))
    handleMouseOverTrack = () => {
        this.setState({
            numIgnoreds: this.state.numIgnoreds +1
        })
    };
    
    
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
        
        <button 
        className="btn btn-success" 
        type="submit"
        onClick={this.handleClickTrack}
        onMouseLeave={this.handleMouseOverTrack}
        > 
        Add Task  </button>
        </form>
        <br/>
        </div>
        </div>
        )
    }
}

export default TodoList ; 