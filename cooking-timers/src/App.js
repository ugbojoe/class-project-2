import React, { Component } from 'react';
import logo from './logo.svg';
import CookTimer from './CookTimer.js';
import Timer from './Timer.js';
// import Time from './Time.js';
import './App.css';

class App extends Component {


   render() {
       return (
         <div className="App">
           <div className="App-header">
             <h2>Welcome to CookTimer</h2>
           </div>
           <p className="App-intro">
             <h1>Cooking Timers</h1>
           </p>
           <CookTimer name='Eggs' />

           <Timer/>
           <CookTimer name= 'Bacon'/>
        
           <Timer/>
         </div>
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
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
// render() {
//  return (
//    <section>
//      <cooktimer name= 'egg'><cooktimer</>
//    </section>
//   );
// };
// };
// }
