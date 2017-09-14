import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
// const Greeting = props => {
//   return (
//     <h3>Aloha</h3>
//   );
// };

class App extends Component {
onEdit(name) {
  alert(name +'clicked the edit button.');
}

  render() {
    return (
      <section>
        <article>
          <h3>Hello World</h3>
          <p>This is React!</p>
        </article>
        <article className='greeting'>
          <Greeting />
          <Greeting name= 'joe' admin= {true} onEdit={this.onEdit}/>
        </article>
      </section>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           Orange Method
//           //To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
