import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ value }) => (value > 0 ? "#ccc" : "#eee")};
    border-color: #bdbdbd;
    border-radius: 5px;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
    flex-grow: 1;
`;

TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
    flex-grow: 1;
`;

Value.displayName = "Value";

export const Comment = styled.div`
    flex-grow: 2;
`;

Comment.displayName = "Comment";
