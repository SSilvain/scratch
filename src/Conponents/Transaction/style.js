import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ value }) => (value > 0 ? "#ccc" : "#eee")};
    border-color: #bdbdbd;
    border-radius: 5px;
    padding: 15px 25px;
`;

Wrapper.displayName = "TransactionWrapper";
