import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import * as C from './styles';

export const MenuItem = ({link, icon, label}) => {

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname === link;

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link);

    }
    return(
        <C.LinkArea active={isActive}
         href={link} onClick={handleLinkClick}
         aria-label={label}>
            <C.LinkIcon src={icon}/>
        </C.LinkArea>
    );
}