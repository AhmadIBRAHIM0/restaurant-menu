import React, {useState} from 'react';
import styled from "styled-components";

interface NavBarProps {
    categories: any,
    filterItems: any
}

const NavBar = ({categories, filterItems}: NavBarProps) => {
    let [currentCategory, setCurrentCategory] = useState(0);

    const handleCategoryClick = (categoryIndex: number, category: any) => {
        filterItems(category);
        setCurrentCategory(categoryIndex);
    };
    return (
        <NavBarContainer>
            <h1>Our Menu</h1>
            <UnderLine></UnderLine>
            <NavBarItems>
                {categories.map((category: any, index: number) => {
                    return (
                        <button
                            type="button"
                            className={`${
                                index === currentCategory ? 'active' : ''
                            }`}
                            key={index}
                            onClick={() => handleCategoryClick(index, category)}
                        >
                            {category}
                        </button>
                    )
                })}
            </NavBarItems>
        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.section`
  text-align: center;

  & h1 {
    font-size: 40px;
  }
`;

const NavBarItems = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 27px;
  margin-top: 2rem;

  & button {
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: black;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
    margin: 0 0.5rem 4rem;
  }
;

  & button:hover, button.active {
    background-color: black;
    color: white;
  }
`;

const UnderLine = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
`;