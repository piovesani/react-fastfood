import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: auto;
    height: 80px;
`;

export const SearchInput = styled.input`
    border: 0;
    width: ${props=> props.active ? 300 : 0}px;
    height: 46px;
    border-radius: 25px;
    background-color: #fff;
    background-image: url('assets/search.svg');
    background-size: 28px 28px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    transition: all ease .2s;
    cursor: pointer;
    font-size: 16px;

    &:focus{
        cursor: text;
    }
`;