import { Injectable, OnModuleInit } from '@nestjs/common'
import { RestaurantDto } from './dto/restaurant.dto';
import * as restaurantsJson from './../../database/restaurants.json';


@Injectable()
export class RestaurantService {
    loadRestaurants(): RestaurantDto[]{
        return restaurantsJson;
    }
}