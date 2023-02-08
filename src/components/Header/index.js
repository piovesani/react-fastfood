import React, { useState } from 'react';
import * as C from './styled';

export const Header = ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search === '' ? false : true);

    const handleInputFocus = ()=> {
        setInputActive(true);
    }

    const handleInputBlur = ()=> {
        if(search === ''){
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return(
        <C.Container>
            <C.Logo src="/assets/logo.svg"/>
            <C.SearchInput 
                type="text" 
                placeholder="Digite um produto..."
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                />
        </C.Container>
    );
}