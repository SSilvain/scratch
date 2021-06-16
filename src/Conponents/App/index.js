import { Component } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: [],
        };
    }
    onChange = (value) =>{
        this.setState((state)=>({
            balance: state.balance + Number(value),
            transactions: [{label: "action", value}, ...state.transactions]
        }))
    }

 
    render() {
        return (
            <div>
                <Balance balance={this.state.balance} />
                <Form onChange={this.onChange} />
                <Transactions transactions={this.state.transactions} />
            </div>
        );
    }
}

export default App;
