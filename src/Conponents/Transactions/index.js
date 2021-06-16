import Transaction from "../Transaction";

const Transactions = ({ transactions }) => {
    return (
        <>
            {transactions.map((x) => (
                <Transaction value={x.value} label={x.label} key={x.id} />
            ))}
        </>
    );
};

export default Transactions;
