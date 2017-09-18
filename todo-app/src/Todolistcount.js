import React from 'react';





const TodoCount = ({entries}) => {
  var listCount = Object.keys(entries).length

  if (listCount === 0) {
    listCount = null;
  }

  return (

    <span>
    {listCount}
    </span>

  );
};


export default TodoCount;
