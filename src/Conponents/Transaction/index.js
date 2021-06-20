import { Wrapper, TransactionDate, Value, Comment } from "./style"

const Transaction = ({ value, date, comment }) => {
    value = +value;
    return (
        <Wrapper value={value}>
            <TransactionDate>{date}</TransactionDate>
            <Value>{value.toFixed(2)}</Value>
            <Comment>{comment}</Comment>
        </Wrapper>
    );
};

export default Transaction;
