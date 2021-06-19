import { Component } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import { Wrapper } from "./style";
import ErrorBoundary from "../ErrorBoundaries";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            balance: 0,
            transactions: [],
        };
    }
    onChange = (value) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [
                { label: "action", value, id: ++state.id },
                ...state.transactions,
            ],
        }));
    };

    render() {
        return (
            <ErrorBoundary>
                <Wrapper>
                    <Balance balance={this.state.balance} />
                    <Form onChange={this.onChange} />
                    <Transactions transactions={this.state.transactions} />
                </Wrapper>
            </ErrorBoundary>
        );
    }
}

export default Home;
