import React, { Component  } from "react";
import track, { useTracking } from 'react-tracking';

@track({ composant: 'item' })
class TodoItems extends Component {
    state = {
        numClicks: 0,
        numIgnoreds: 0
    };

      // class members usage (with state)
  @track((props, state) => ({
    event: "ignore_item",
    ignored: state.numIgnoreds
  }))
    handleMouseOverTrack = () => {
     this.setState({
         numIgnoreds: this.state.numIgnoreds +1
     })
    };
    
    

    createTasks = item => { return (
        <li className="list-group-item" key={item.key} onMouseLeave={this.handleMouseOverTrack} onClick={ () => {this.props.deleteItem(item.key) } } > 
        {item.text}
        </li>
        )
    }
    
    render() {
        const todoEntries = this.props.entries ; 
        const listItems = todoEntries.map(this.createTasks) ; 
        
        return <ul className="theList list-group">{listItems} </ul>
    }
}

export default TodoItems ; 