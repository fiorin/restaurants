import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { CuisineService } from './cuisine.service';
import { CuisineDto } from './dto/cuisine.dto';
import { FilterService } from './filter/filter.service';
import { SortService } from './sort/sort.service';

@Controller('restaurant')
export class RestaurantController {

    constructor(
        private readonly restaurantService: RestaurantService,
        private readonly cuisineService: CuisineService,
        private readonly filterService: FilterService,
        private readonly sortService: SortService
    ) {
    }

    @Get()
    async getRestaurants(@Query() query): Promise<RestaurantDto[]> {
        let restaurants: RestaurantDto[] = [];
        let cuisines: CuisineDto[] = [];

        restaurants = this.restaurantService.loadRestaurants();
        cuisines = this.cuisineService.loadCuisines();

        query = this.filterService.mapCuisineIds(cuisines, query);
        const filters = this.filterService.prepareFilters(query);
        restaurants = this.filterService.applyFilters(restaurants, filters);

        restaurants = this.sortService.sort(restaurants);
        restaurants = this.sortService.limit(restaurants);
        return restaurants;
    }

    @Get('cuisines')
    getCuisines(): CuisineDto[] {
        return this.cuisineService.getCuisines();
    }
}
