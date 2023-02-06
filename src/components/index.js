import React from 'react';
import * as C from './styles';

export const MenuItem = ({link, icon}) => {
    return(
        <C.LinkArea href={link}>
            <C.LinkIcon src={icon}/>
        </C.LinkArea>
    );
}