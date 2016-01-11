class Deposit extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div>
            <div className='card green lighten-1'>
              <div className='card-content white-text'>
                <p>this.props.name</p>
                <p>{this.props.amount}</p>
              </div>
            </div>
          </div>)
  }
}
