import React from "react";
import RestaurantList from "../components/RestaurantList";

function Index({ restaurants }) {
  return (
    <div>
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { price, rating, cuisine, distance } = context.query;
  let query = '';
  if (price) { query = `?price=${price}` }
  if (rating) { query = `?rating=${rating}` }
  if (cuisine) { query = `?cuisine=${cuisine}` }
  if (distance) { query = `?distance=${distance}` }
  const res = await fetch(`http://localhost:3000/restaurant${query}`, { method: 'GET' })
  const restaurants = await res.json()
  return {
    props: {
      restaurants
    }
  }
}

export default Index