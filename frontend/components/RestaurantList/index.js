import React from "react";
import styled from "styled-components";
import theme from "../../config/theme";
import RestaurantListItem from '../RestaurantListItem';


const { colors } = theme;

const RestaurantList = ({ restaurants }) => {
  if (restaurants && restaurants?.length > 0) {
    return (
      <RestaurantsUl>
        {restaurants?.map((restaurant) => (
          <RestaurantListItem restaurant={restaurant} key={restaurant.name}/>
        ))}
      </RestaurantsUl>
    )
  } else {
     return <div></div>
  }
}

export default RestaurantList 

const RestaurantsUl = styled.ul`
  padding-left:0;
  list-style:none;
  margin: 0;
`;