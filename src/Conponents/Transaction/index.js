const Transaction = ({ label, value, id }) => {
    return (
        <div key={id}>
            {label} <strong>{value}</strong>
        </div>
    );
};

export default Transaction;
