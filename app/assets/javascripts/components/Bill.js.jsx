class Bill extends React.Component{
  constructor(props){
    super(props);
    this.removeBill = this.removeBill.bind(this);
    this.state = {bills: []};
  }

  removeBill(){
    $.ajax({
      url: '/bills/' + this.props.id,
      type: 'DELETE'
    }).success( data => {
      this.props.refreshBills();
    });
  }

  render(){
    return(<div>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <p>{this.props.name}</p>
                <p>{this.props.ammount}</p>
                <a className='btn wave-light' onClick={this.removeBill}>Delete</a>
              </div>
            </div>
          </div>);
  }
}
