import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import * as C from './styled';
import { Header } from '../../components/Header';
import { CategoryItem } from '../../components/CategoryItem'
import Api from '../../Api';

export const HomeScreen = () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await Api.getCategories();
            if (cat.error === '') {
                setCategories(cat.result);
            }
        };
        getCategories();
    }, []);

    useEffect(()=> {

    }, [activeCategory]);


    return (
        <C.Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&
                <C.CategoryArea>
                    <C.Title>Selecione uma categoria</C.Title>
                    <C.CategoryList>
                        <CategoryItem data={{
                            id:0,
                            name: 'Todas Categorias',
                            image: '/assets/food-and-restaurant.png'
                        }}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </C.CategoryList>
                </C.CategoryArea>
            }
        </C.Container>
    );
}