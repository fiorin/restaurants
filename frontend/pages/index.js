import React from "react";
import RestaurantList from "../components/RestaurantList";
import axios from "axios";

function Index({ restaurants }) {
  return (
    <div>
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const response = await axios.get('http://localhost:3001/api/restaurant', { params: context.query });
  const restaurants = response.data;
  return {
    props: {
      restaurants
    }
  }
}

export default Index