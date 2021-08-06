import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class FilterService{

    validateFilter(query) {
        if (!query) return; 

        query.price 
        && this.validatePriceRange(query.price);

        query.distance 
        && this.validateDistanceRange(query.distance);

        query.rating 
        && this.validateRatingRange(query.rating);
    }

    mapCuisineIds(cuisines, query) {
        if (!query || !query.cuisine) return query;
        query.cuisine = cuisines.filter(cuisine => cuisine.name.includes(query.cuisine))
            .map(cousine => cousine.id)
        return query;
    }

    prepareFilters(query) {
        if (!query) return []; 

        let filters = [];

        query.cuisine && filters.push((restaurant) => this.filterCuisine(restaurant,query.cuisine))

        query.name && filters.push((restaurant) => this.filterName(restaurant,query.name))

        query.price && filters.push((restaurant) => this.filterPrice(restaurant,query.price))

        query.distance && filters.push((restaurant) => this.filterDistance(restaurant,query.distance))

        query.rating && filters.push((restaurant) => this.filterRating(restaurant,query.rating))

        return filters;
    }

    applyFilters(restaurants, filters) {
        return restaurants.filter(
            restaurant => filters.every(
                (filter) => filter(restaurant)
            )
        )
    }

    filterCuisine(restaurant, filter): boolean {
        return filter.findIndex((filterId) => filterId == restaurant.cuisine_id) >= 0;
    }

    filterName(restaurant, name): boolean {
        return restaurant.name.includes(name);
    }

    filterPrice(restaurant, price): boolean {
        return restaurant.price <= price;
    }

    filterDistance(restaurant, distance): boolean {
        return restaurant.distance <= distance;
    }

    filterRating(restaurant, rating): boolean {
        return restaurant.customer_rating >= rating;
    }

    validatePriceRange(price: number) {
        if (price < 10) throw new HttpException("price can't be below $10", 502);
        if (price > 50) throw new HttpException("price can't be superior than $50", 502);
        return true;
    }

    validateDistanceRange(distance: number) {
        if (distance > 10) throw new HttpException("rating can't be superior than 5 miles", 502);
        if (distance < 1) throw new HttpException("distance can't be below 1 mile", 502);
        return true;
    }

    validateRatingRange(rating: number) {
        if (rating < 1) throw new HttpException("rating can't be below 0", 502);
        if (rating > 5) throw new HttpException("rating can't be superior than 5", 502);
        return true;
    }
}