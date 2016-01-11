class Deposits extends React.Component{
  constructor(props){
    super(props);
    this.state = { deposits: [] };
  }

  componentDidMount(){
    $.ajax({
      url: '/deposits',
      type: 'GET'
    }).success( data => {
      this.setState({ deposits: data.deposits });
    });
  }

  newDeposit(){
    $.ajax({
      url: '/deposits',
      type: 'POST',
      data: { deposit: {name: this.refs.name.value, amount: this.refs.amount.value}}
    }).success( data => {
      let deposits = this.state.deposits;
      deposits.push(data.deposit);
      this.setState({ deposits: deposits});
    }).error(
      alert('Deposit did not work')
    );
  }
  render(){
    let deposits = this.state.deposits.map( deposit => {
      let key = `deposit-${deposit}`;
      return(<Deposit key={key} {...tweet} />);
    });
    return(<div>
            <input placeholder="Deposit Name" ref='name' />
            <input placeholder="Deposit Amount" ref='amount' />
            <button className='btn' onClick={this.newDeposit.bind(this)}>Post Deposit</button>
            <p></p>
            <br /><hr />
            <h2 className='center-text'>Deposits</h2>
            <hr />
          </div>);
  }
}
