import React from 'react';

const Greeting = ({name, admin}) => { //removing or destr the props
  const adminButton = admin ? <button>Edit</button> : null;
  const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good morning' :
                     hours < 18 ? 'Good afternoon' :
                     'Good evening';


  return (
    <div>
    <h3>{greeting} {name} {adminButton}</h3>

    // <h3>Aloha {name} {adminButton}</h3>

    </div>
  );
};

export default Greeting;

// import React from 'react';
//
// const Greeting = props => {
//   const adminButton = props.admin ? <button>Edit</button> : null;
//   return (
//     <div>
//     <h3>Aloha {props.name} {adminButton}</h3>
//
//     </div>
//   //  <h3>This is my React demo</h3>
//   );
// };
//
// export default Greeting;
