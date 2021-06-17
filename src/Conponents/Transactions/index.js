import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions = [] }) => transactions.map((x) => (
    <Transaction value={x.value} label={x.label} key={x.id} />
))

Transactions.propTypes = {
    transactions: PropTypes.array
};


export default Transactions;
