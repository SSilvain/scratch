import {Component} from "react";
import Balance from "../Balance";

class App extends Component {
  constructor () {
    super();
    this.state ={
      balance: 0,
      transactions: []
    }
  }
  
  componentDidMount (){
    // const balance = window.localStorage.getItem("balance")*1;
    // this.setState ((state) =>({
    //   balance
    // }))
  }
  
  componentWillUnmount (){
    // window.localStorage.setItem("balance", this.state.balance)
  }
  
  onIncrease = () => {
    this.setState((state)=> ({
        balance: state.balance = state.balance+1,
        transactions: [{label: "inc", value: 1}, ...state.transactions]})
    )
  }
  
  onDecrease = () => {
    this.setState((state)=> ({
        balance: state.balance = state.balance-1,
        transactions: [{label: "dec", value: -1}, ...state.transactions]})
    )
  }
  
  render(){
    return (
      <div>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Increaase</button>
        <button onClick={this.onDecrease}>Decreaase</button>
        <div>{
          this.state.transactions.map(x=><div>{x.label} <strong>{x.value}</strong></div>)
          }</div>
      </div>
    );}
  }

export default App;
