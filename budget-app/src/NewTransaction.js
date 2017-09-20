import React from 'react';

class NewTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: ''
    };
  }

  onNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

  onAmountChange(e) {
    e.preventDefault();
    this.setState({
      amount: Number(e.target.value)
    });
  }

  onSubmit(transactionType) {
    this.props.onSubmit({
      name: this.state.name,
      amount: this.state.amount,
      transactionType
    });
    this.setState({
      name: '',
      amount: ''
    });
  }
  onKeyDown(e) {
    // prevent Enter key from submitting form
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <section className="container">
        <form
          className="form-horizontal"
          onSubmit={(e) => e.preventDefault()}
          onKeyDown={this.onKeyDown}
          >
          <article className="form-group">
            <label
              className="control-label col-xs-2"
              htmlFor="name">Name:
            </label>
            <div className="col-xs-10">
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
          </article>
          <article className="form-group">
            <label
              className="control-label col-xs-2"
              htmlFor="amount">Amount:
            </label>
            <div className="col-xs-10">
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={this.state.amount}
                onChange={this.onAmountChange.bind(this)}
              />
            </div>
          </article>
          <article className="form-group">
            <div className="col-xs-offset-2 col-xs-10">
              <div className="btn-group" role="group">
                <button
                  onClick={() => this.onSubmit('debit')}
                  className="btn btn-success">Debit</button>
                <button
                  onClick={() => this.onSubmit('credit')}
                  className="btn btn-danger">Credit</button>
              </div>
            </div>
          </article>
        </form>
      </section>
    );
  }
}

export default NewTransaction;

// import React from 'react';
//
// const budget =({balance, transaction, debit, deposit, onAdd}) => {
//
//
//     return (
//       <div>
//       <h3>{balance} </h3>
//       <dl>
//         <dt>Transaction</dt><dd>{transaction}</dd>
//         <dt>Debit</dt><dd>{debit}</dd>
//         <dt>Deposit:</dt><dd>{deposit}</dd>
//       </dl>
//       <h3>{balance} {transaction} {debit} {deposit} </h3>
//       <p>Click <button
//         onClick={() => onAdd(debit)}>debit</button>
//       </p>
//       </div>
//
//     );
//   };
//
//
// export default budget;
