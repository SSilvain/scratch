import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions = [] }) => transactions.map((x) => (
    <Transaction value={x.value} date={x.date} comment={x.comment} key={x.id} />
))

Transactions.propTypes = {
    transactions: PropTypes.array
};


export default Transactions;
