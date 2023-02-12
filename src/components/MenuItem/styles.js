import styled from "styled-components";

export const LinkArea = styled.a`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: ${props=>props.active ? '#2e211e' : 'transparent'};
    transition: all easy .2s;

    &:hover::after{
        opacity: 0.8;
        display: block;
        pointer-events: all;
    }

    &::after{
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
        pointer-events: none;
        margin-left: 200px;
        white-space: nowrap;
        transition: 1s;
        position: absolute;
        content: attr(aria-label);
        background-color: #000;
        color: #fff;
        border-radius: 4px;
        border-left: 6px solid #fff;
        padding: 15px;
        font-size: 14px;
        display: none;
    }
`;

export const LinkIcon = styled.img`
    width: 35px;
    height: auto;
`;