import {Wrapper} from "./style"

const Transaction = ({ label, value}) => {
    return (
        <Wrapper value={value}>
            {label} <strong>{value}</strong>
        </Wrapper>
    );
};

export default Transaction;
