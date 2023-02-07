import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    width: 80px;
    flex-direction: column;
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #000000;
    background-image: url(/assets/bg.png);
    background-size: cover;
    background-position: center;
    flex: 1;
`;