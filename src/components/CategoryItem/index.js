import React from "react";
import {Container, CategoryImage } from "./styled";

export const CategoryItem = ({ data, activeCategory, setActiveCategory, label }) => {
    console.log(activeCategory + ' ' + data.id);

    let color = activeCategory === data.id ? '#201C2E' : '#2E211E';

    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }

    return(
        <Container color={color} onClick={handleCategoryClick} aria-label={data.name}>
            <CategoryImage src={data.image} />
        </Container>
    );
}