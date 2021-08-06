import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import { FaStar, FaWalking, FaDollarSign } from 'react-icons/fa';

// import DeveloperListMenu from "../DeveloperListMenu";
// import DeveloperListInfo from "../DeveloperListInfo";

const DeveloperItemList = ({ restaurant }) => (
    <RestaurantLi>
        <RestaurantImage>
            <Image src={"/img/cuisine/"+restaurant.cuisine_id+".png"} alt={restaurant.name} width="50" height="50"/>
        </RestaurantImage>
        <RestaurantInfo>
            <RestaurantTitle>
                {restaurant.name} 
                <StarColor>
                    <Stars times={restaurant.customer_rating} />
                </StarColor>
            </RestaurantTitle>
            <div>
                <FaWalking/> {restaurant.distance} miles | <FaDollarSign/>{restaurant.price}.00
            </div>
        </RestaurantInfo>
    </RestaurantLi>
)

const Stars = ({ times }) => {
    return (
        Array.apply(null, { length: times }).map((e, i) => (
            <FaStar/>
        ))
    )
}

export default DeveloperItemList 

const StarColor = styled.span`
    color: #D4AF37;
    margin-left:10px;
`;

const RestaurantTitle = styled.div`
    margin-bottom: 5px;
`;

const RestaurantImage = styled.div`
    border-radius:5px;
    border:3px solid #fff;
    background:#f3f3f3;
    width:60px;
    height:60px;
    padding:5px;
`;

const RestaurantInfo = styled.div`
    padding: 5px 10px;
`;

const RestaurantLi = styled.li`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    padding:10px;
    border:1px solid #ddd;
    border-radius:5px;
    background:#f8f8f8;
    color:#333;
    &:not(last-child) {
        margin-bottom:10px;
    }
`;