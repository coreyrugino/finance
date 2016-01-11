class Bills extends React.Component{
  constructor(props){
    super(props);
    this.refreshBills = this.refreshBills.bind(this);
    this.state = {  bills: [] };
  }


  componentDidMount(){
    this.refreshBills();
  }

  refreshBills(){
    $.ajax({
      url: '/bills',
      type: 'GET'
    }).success(data => {
      this.setState({ bills: data.bills})
    });
  }

  newBill(){
    $.ajax({
      url: '/bills',
      type: 'POST',
      data: { bill: {name: this.refs.name.value, ammount: this.refs.ammount.value}}
    }).success( data =>  {
      let bills = this.state.bills;
      bills.push(data.bill);
      this.refs.name.value = null;
      this.refs.ammount.value = null;
      this.setState({ bills: bills});
    }).error( data => {
      alert('could not make a new bill')
    })
  }

  totalBill(){
    $.ajax({
      url: '/sum_bills',
      type: 'GET'
    }).success( data => {
      let totalBills = data;
      this.setState({totalBillAmmount: totalBills})
    }).error( data => {
      console.log('error calculating totals');
    })
  }


  render(){
    let bills = this.state.bills.map( bill => {
      let key = `bill-${bill.id}`;
      return(<Bill refreshBills={this.refreshBills} key={key} {...bill} />);
    });
    return(<div>
            <input placeholder="Bill name" ref='name' autoFocus={true} /><br />
            <input placeholder="Bill ammount" ref='ammount' /><br />
            <button className='btn' onClick={this.newBill.bind(this)}>Post Bill</button>
            <p></p>
            <button className='btn' onClick={this.totalBill.bind(this)}>Total Bills</button>
            {this.state.totalBillAmmount}
            <br /><hr />
            <h2 className='green center'>Bills</h2>
            <hr />
            {bills}
           </div>);
  }
}
