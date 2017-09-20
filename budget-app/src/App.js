import React, { Component } from 'react';
import { render } from 'react-dom';
import NewTransaction from './NewTransaction';
import Transaction from './Transaction';
import transactions from './transactions';
import toCurrency from './toCurrency';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBalance: 100.01,
      transactions
    };
  }
  onSubmit(newTransaction) {
    console.log(newTransaction);
    let currentBalance = this.state.currentBalance;
    let transactions = this.state.transactions.slice();
    newTransaction.id = transactions.length + 1;
    transactions.push(newTransaction);

    if (newTransaction.transactionType === 'credit') {
      currentBalance += newTransaction.amount;
    } else {
      currentBalance -= newTransaction.amount;
    }
    this.setState({ currentBalance, newTransaction, transactions });
  }

  render() {
    const errorMessage = (
      <section className="error">
        <h3>We are unable to show the balance. Please verify your credentials and try again.</h3>
      </section>
    );
    const transactions = this.state.transactions.map( tx => {
      return <Transaction name={tx.name} amount={tx.amount} type={tx.transactionType} />;
    });
    const balanceAndTransactions = (
      <section className="showBalance">
        <h3>The account balance is {toCurrency(this.state.currentBalance)}</h3>
        <NewTransaction onSubmit={this.onSubmit.bind(this)} />
        <h4>Transactions</h4>
        <div className="transactions">
          <ul>{transactions}</ul>
        </div>
      </section>
    );
    const output = this.state.currentBalance || this.state.currentBalance === 0 ?
      balanceAndTransactions : errorMessage;
    return (
      <main>
        <h1>Budget App</h1>
        {output}
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));













// import React, { Component } from 'react';
// import budget from './Budget.js';
// import './App.css';
//
//
// addToCart(debit) {
//   console.log(debit);
// }
//
// class App extends Component {
//   render() {
//     return (
//       <section>
//         <article>
//           <h2>Welcome to Managing a Budget App</h2>
//           </article>
//           <div>
//           <h2>Budget App</h2>
//           <h1>Balance:</h1>
//         <div>Transaction</div>
//         <div>debit onAdd={this.addToCart}, deposit onAdd={this.addToCart}</div>
//       </div>
//     </section>
//     );
//   }
// }
//
// export default App;
//
//
//
