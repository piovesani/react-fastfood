import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as C from './styled';
import { Header } from '../../components/Header';

export const HomeScreen = () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    
    return (
        <C.Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
        </C.Container>
    );
}