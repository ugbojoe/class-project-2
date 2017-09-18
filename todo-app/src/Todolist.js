import React from 'react';

const Todolistitems = ({entries,deleteItem}) => {

  function createTasks(item) {
        return <li class="strike" key={item.key}><span>
    <button onClick={() => deleteItem(item)}>x</button>
  </span>{item.text}</li>
     }
  var listItems = entries.map(createTasks)
  return (
    <div>
      <ul className="theList">
          {listItems}
      </ul>
    </div>
  );
};


export default Todolistitems;
