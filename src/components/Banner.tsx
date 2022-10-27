import React from 'react'
import styled from "styled-components";

const Banner = () => {
    return (
        <BannerContainer>
            <div className="title">
                <h1>Welcome To Mr Shawarmaaa <br/>
                    Restaurant</h1>
            </div>
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.section`
  background-image: url(${process.env.PUBLIC_URL + '/images/kebab.jpg'});
  background-size: cover;
  background-repeat: no-repeat;
  height: 550px;
  margin-top: -70px;
  font-size: 50px;
  & .title {
    padding: 180px 0 0 30px;
    color: white;
  }
    `;