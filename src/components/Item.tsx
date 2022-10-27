import React from 'react';
import styled from 'styled-components';

const Item = ({ items }: any) => {
    return (
        <Menu>
            {items.map((foodItems: { id: number; title: string; img: string; description?: string; price: number; }) => {
                const { id, title, img, description, price } = foodItems;
                return (
            <Card key={id}>
                <img src={img} alt={'test'}/>
                <Details>
                    <DetailsSub>
                        <h5>{title}</h5>
                        <h5 className="price"> {price}$ </h5>
                    </DetailsSub>
                    <p>{description}</p>
                    <button>Add to cart</button>
                </Details>
            </Card>
                );
                })}
        </Menu>
    )
}

export default Item

const Menu = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0;
  display: grid;
  grid-template-columns: 27% 27% 27%;
  background: rgb(245, 242, 242);
  row-gap: 5em;
`;

const Card = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  width: 300px;

  & img {
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 15px 15px 0 0;
  }
`;

const Details = styled.div`
  padding: 20px 10px;
  display: grid;
  grid-template-rows: auto 1fr 50px;
  grid-row-gap: 15px;

  & p {
    color: #6f6f6f;
    font-size: 15px;
    line-height: 25px;
    align-self: stretch;
  }
;

  & button {
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 7px;
    width: 180px;
    background-color: black;
    justify-self: center;
`;

const DetailsSub = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  & h5 {
    font-weight: 600;
    font-size: 18px
  }
  & h5.price {
    text-align: right;
  }
;
`;