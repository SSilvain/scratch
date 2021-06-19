const Balance = ({ balance }) => {
    return <div>{balance === 0 ? "full zero": balance}</div>;
};

export default Balance;
