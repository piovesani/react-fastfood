import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: ${props=>props.active ? '#2e211e' : 'transparent'};
    transition: all easy .2s;

    &:hover{
        opacity: 0.8;
    }
`;

export const LinkIcon = styled.img`
    width: 35px;
    height: auto;
`;