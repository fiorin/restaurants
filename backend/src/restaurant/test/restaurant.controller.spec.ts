import { Test, TestingModule } from '@nestjs/testing';
import { CuisineService } from '../cuisine.service';
import { FilterService } from '../filter/filter.service';
import { RestaurantController } from '../restaurant.controller';
import { RestaurantService } from '../restaurant.service';
import { SortService } from '../sort/sort.service';

const mockRestaurantService = () => ({
    loadRestaurants: jest.fn(),
});
const mockFilterService = () => ({
    applyFilters: jest.fn(),
    prepareFilters: jest.fn(),
    mapCuisineIds: jest.fn(),
});
const mockSortService = () => ({
    sort: jest.fn(),
    limit: jest.fn(),
});

describe('Restaurant Controller', () => {
    let controller;
    let restaurantService, filterService, sortService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
        controllers: [
            RestaurantController
        ],
        providers: [
            {
                provide: RestaurantService,
                useFactory: mockRestaurantService,
            },
            {
                provide: FilterService,
                useFactory: mockFilterService,
            },
            {
                provide: SortService,
                useFactory: mockSortService,
            },
            CuisineService,
        ],
        }).compile();
        controller = await module.get<RestaurantController>(RestaurantController);
        restaurantService = await module.get<RestaurantService>(RestaurantService);
        filterService = await module.get<FilterService>(FilterService);
        sortService = await module.get<SortService>(SortService);
    })

    let mockRestaurants;

    beforeEach(() => {
        mockRestaurants = [
            {
                "name": 'restaurant name',
                "price": 20,
                "distance": 10,
                "rating": 3,
                "cuisine": 1
            }
        ];
    });

    it('route /', async () => {
        restaurantService.loadRestaurants.mockResolvedValue(mockRestaurants);
        filterService.applyFilters.mockResolvedValue(mockRestaurants);
        filterService.prepareFilters.mockResolvedValue({});
        filterService.mapCuisineIds.mockResolvedValue({});
        sortService.sort.mockResolvedValue(mockRestaurants);
        sortService.limit.mockResolvedValue(mockRestaurants);
        const restaurants: any = await controller.getRestaurants({})
        expect(restaurants).toEqual(restaurants);
    });
})