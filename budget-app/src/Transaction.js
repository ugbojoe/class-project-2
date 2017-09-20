import React from 'react';
import toCurrency from './toCurrency';

export default ({ name, type, amount }) => {
  return <li>A {type} of {toCurrency(amount)} for {name}.</li>;
};
