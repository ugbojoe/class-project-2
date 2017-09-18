import React, { Component } from 'react';
import './App.css';
import Todolistitems from './Todolist'
import TodoCount from './Todolistcount'



class App extends Component {

constructor(props){
    super(props)
    this.state = {
      message: '',
      items: []
    }
  }
captureData = (event) => {
  this.setState({ message: event.target.value})
}

postData = (event) => {
    this.setState({ message: event.target.value})
    var itemArray = this.state.items;
    itemArray.push(
    {
      text: this.state.message,
      key: Date.now()
    }
  );

  this.setState({
    items: itemArray
  });

  console.log(this.state.message);
  console.log(this.state.items);

  event.preventDefault();
  }
deleteItem(item) {
  console.log(`deleted item`)
}

render() {


    return (
      <div>
        <h1>TODOs <span><TodoCount entries={this.state.items}/></span></h1>
        <form>
          <input
            type='text'
            placeholder="Enter Todo list here!"
            value={this.state.message}
            onChange={this.captureData}/>
          <button onClick={this.postData}> click</button>
        </form>
        <Todolistitems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
