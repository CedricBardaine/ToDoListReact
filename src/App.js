import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList' ; 
import TodoItems from './TodoItems' ; 
import './alertify.min.css';
import './alertify-bootstrap.min.css';
import alertify from 'alertifyjs';

class App extends Component {
  constructor() {
    super() ;
    this.state = {
      items: [] ,
      currentItem: {text: '', key: ''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value ; 
    const currentItem = { text: itemText , key: Date.now() } ; 
    this.setState({
      currentItem,
    });
    console.log('You are writing a new task :)') ; 
  }
  addItem = e => {
    e.preventDefault() ;
    const newItem = this.state.currentItem ; 
    if ( newItem.text !== '' && newItem.text !==' ') {
      console.log(newItem) ; 
      const items = [...this.state.items, newItem] ;
      this.setState ({
        items: items, 
        currentItem: {text: '' , key: ''} ,
      })
    }
    console.log('You clicked on the Add Task button :)') ; 
  }
  
  deleteItem = key => {
    let tasktodelete  ;
    this.state.items.forEach(item => {
      if ( item.key === key) tasktodelete = item ; 
    });
    
    var thisApp = this; 
    
    alertify.confirm("Please confirm..." , "Are you sure to delete : <b>" + tasktodelete.text + "</b>", 
    function(){  
      const filteredItems = thisApp.state.items.filter(item => {
        return item.key !== key
      }) ; 
      thisApp.setState ({
        items: filteredItems,
      }) ; 
      alertify.success('Task deleted') ; } 
      , 
      function() { alertify.error('Canceled') ; }
      ) ;      
    }
    
    
    inputElement = React.createRef() ;
    
    render() { return (
      <div className="App">
      <TodoList 
      addItem={this.addItem} 
      inputElement= {this.inputElement} 
      handleInput = {this.handleInput}
      currentItem = {this.state.currentItem} 
      />
      
      <TodoItems 
      entries = {this.state.items} 
      deleteItem={this.deleteItem}
      />
      </div>
      ); 
    }
    
  }
  
  export default App;
