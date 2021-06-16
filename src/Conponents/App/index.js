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
    const balance = window.localStorage.getItem("balance")*1;
    this.setState ((state) =>({
      balance
    }))
  }
  
  componentWillUnmount (){
    window.localStorage.setItem("balance", this.state.balance)
  }
  
  onIncrease = () => {
    this.setState((state)=> ({
        balance: state.balance = state.balance+1,
        transactions: [{label: "inc"}, ...state.transactions]})
    )
  }
  
  onDecrease = () => {
    this.setState((state)=> ({
        balance: state.balance = state.balance-1,
        transactions: [{label: "dec"}, ...state.transactions]})
    )
  }
  
  render(){
    return (
      <div>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Increaase</button>
        <button onClick={this.onDecrease}>Decreaase</button>
        <div>{
          this.state.transactions.map(x=>x.label)
          }</div>
      </div>
    );}
  }

export default App;
