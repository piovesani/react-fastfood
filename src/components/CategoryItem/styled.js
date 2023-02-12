import styled from 'styled-components';

export const Container = styled.a`
    width: 80px;
    height: 80px;
    background-color: ${props=> props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    transition: all easy 0.3s;

    &:hover::after{
        opacity: 0.8;
        display: block;
        pointer-events: all;
    }

    &::after{
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
        pointer-events: none;
        margin-top: -150px;
        white-space: nowrap;
        transition: 1s;
        position: absolute;
        content: attr(aria-label);
        background-color: #000;
        border-bottom: 6px solid #fff;
        color: #fff;
        border-radius: 4px;
        padding: 15px;
        font-size: 14px;
        display: none;
    }
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;

