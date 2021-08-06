import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CuisineDto } from '../dto/cuisine.dto';
import { RestaurantDto } from '../dto/restaurant.dto';
import { FilterService } from '../filter/filter.service';

describe('FilterService', () => {

    let app: TestingModule;
    let filterService: FilterService;

    beforeEach(async () => {
        app = await Test.createTestingModule({
            providers: [
                FilterService
            ],
        }).compile();
        filterService = await app.get<FilterService>(FilterService);
    });

    describe('Rating range validator', () => {

        it('Valid rating accepted in the range', () => {
            const validRating = 4;
            expect(filterService.validateRatingRange(validRating)).toBe(true);
        })

        it('Invalid rating below the range', () => {
            const validRating = 0;
            const func = () => filterService.validateRatingRange(validRating)
            expect(func).toThrow(HttpException)
        })

        it('Invalid rating above the range', () => {
            const validRating = 6;
            const func = () => filterService.validateRatingRange(validRating)
            expect(func).toThrow(HttpException)
        })

    });

    describe('Distance range validator', () => {

        it('Valid rating accepted in the range', () => {
            const validDistance = 5;
            expect(filterService.validateDistanceRange(validDistance)).toBe(true);
        })

        it('Invalid rating below the range', () => {
            const validDistance = 0;
            const func = () => filterService.validateDistanceRange(validDistance)
            expect(func).toThrow(HttpException)
        })

        it('Invalid rating above the range', () => {
            const validDistance = 11;
            const func = () => filterService.validateDistanceRange(validDistance)
            expect(func).toThrow(HttpException)
        })

    });

    describe('Pricing range validator', () => {

        it('Valid price accepted in the range', () => {
            const validPrice = 20;
            expect(filterService.validatePriceRange(validPrice)).toBe(true);
        })

        it('Invalid price below the range', () => {
            const validPrice = 5;
            const func = () => filterService.validatePriceRange(validPrice)
            expect(func).toThrow(HttpException)
        })

        it('Invalid price above the range', () => {
            const validPrice = 60;
            const func = () => filterService.validatePriceRange(validPrice)
            expect(func).toThrow(HttpException)
        })

    });

    describe('Filter rating', () => {

        let restaurant: RestaurantDto;
        let rating: number = 3

        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Restaurant rating above searched', () => {
            restaurant = {...restaurant, customer_rating: 4}
            const validate = filterService.filterRating(restaurant, rating);
            expect(validate).toBe(true);
        })

        it('Restaurant rating below searched', () => {
            restaurant = {...restaurant, customer_rating: 2}
            const validate = filterService.filterRating(restaurant, rating);
            expect(validate).toBe(false);
        })
        
        it('Restaurant rating exactly the same as searched', () => {
            restaurant = {...restaurant, customer_rating: 3}
            const validate = filterService.filterRating(restaurant, rating);
            expect(validate).toBe(true);
        })

    });

    describe('Filter distance', () => {

        let restaurant: RestaurantDto;
        let distance: number = 10;

        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Restaurant distance above searched', () => {
            restaurant = {...restaurant, distance: 20}
            const validate = filterService.filterDistance(restaurant, distance);
            expect(validate).toBe(false);
        })

        it('Restaurant distance below searched', () => {
            restaurant = {...restaurant, distance: 5}
            const validate = filterService.filterDistance(restaurant, distance);
            expect(validate).toBe(true);
        })
        
        it('Restaurant distance exactly the same as searched', () => {
            restaurant = {...restaurant, distance: 10}
            const validate = filterService.filterDistance(restaurant, distance);
            expect(validate).toBe(true);
        })

    });

    describe('Filter price', () => {

        let restaurant: RestaurantDto;
        let price: number = 10;

        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Restaurant price above searched', () => {
            restaurant = {...restaurant, price: 20}
            const validate = filterService.filterPrice(restaurant, price);
            expect(validate).toBe(false);
        })

        it('Restaurant price below searched', () => {
            restaurant = {...restaurant, price: 5}
            const validate = filterService.filterPrice(restaurant, price);
            expect(validate).toBe(true);
        })
        
        it('Restaurant price exactly the same as searched', () => {
            restaurant = {...restaurant, price: 10}
            const validate = filterService.filterPrice(restaurant, price);
            expect(validate).toBe(true);
        })

    });

    describe('Filter name', () => {

        let restaurant: RestaurantDto;

        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Restaurant name is part of the name ', () => {
            let name = 'taurant';
            const validate = filterService.filterName(restaurant, name);
            expect(validate).toBe(true);
        })

        it('Restaurant name is not part of the name', () => {
            let name = 'another';
            const validate = filterService.filterName(restaurant, name);
            expect(validate).toBe(false);
        })
        
        it('Restaurant name is exactly the name', () => {
            let name = 'Restaurant name';
            const validate = filterService.filterName(restaurant, name);
            expect(validate).toBe(true);
        })

    });

    describe('Filter cuisine', () => {

        let restaurant: RestaurantDto;

        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Kitchen type is part of the research', () => {
            let cuisines = [1,2,3];
            const validate = filterService.filterCuisine(restaurant, cuisines);
            expect(validate).toBe(true);
        })

        it('kitchen type is not part of the research', () => {
            let cuisines = [2,3];
            const validate = filterService.filterCuisine(restaurant, cuisines);
            expect(validate).toBe(false);
        })

    });

    describe('Filter cuisine', () => {

        let restaurant: RestaurantDto;
        beforeEach(() => {
            restaurant = {
                name: 'Restaurant name',
                customer_rating: 3,
                distance: 5,
                price: 20,
                cuisine_id: 1
            };
        });

        it('Restaurant passed the filters', () => {
            const filter = (target) => true;
            const filtered = filterService.applyFilters([restaurant], [filter]);
            expect(filtered).toEqual([restaurant]);
        })

        it('Restaurant did not pass the filters', () => {
            const filter = (target) => false;
            const filtered = filterService.applyFilters([restaurant], [filter]);
            expect(filtered).toEqual([]);
        })

    });

    describe('Validate query', () => {

        it('Invalid query', () => {
            const validated = filterService.validateFilter({});
            expect(validated).toEqual(undefined)
        })

        it('Invalid price query', () => {
            const query = {price:-1}
            const func = () => filterService.validateFilter(query)
            expect(func).toThrow(HttpException)
        })

        it('Invalid distance query', () => {
            const query = {distance:-1}
            const func = () => filterService.validateFilter(query)
            expect(func).toThrow(HttpException)
        })

        it('Invalid rating query', () => {
            const query = {rating:-1}
            const func = () => filterService.validateFilter(query)
            expect(func).toThrow(HttpException)
        })

    });

    describe('Mapping cuisine id', () => {

        let cuisines: CuisineDto[] = [
            {
                id: 1,
                name: 'Name'
            }
        ]
        let query = {cuisine: 'Name'}

        it('Mapped cuisine', () => {
            const ids = filterService.mapCuisineIds(cuisines, query);
            expect(ids).toEqual({ cuisine: [1]})
        })

    });

    describe('Prepare filter', () => {

        it('Pushing cuisine filter', () => {
            let query = {cuisine: [1]}
            const filters = filterService.prepareFilters(query);
            expect(filters).toHaveLength(1);
        })

        it('Pushing name filter', () => {
            let query = {name: "Restaurant"}
            const filters = filterService.prepareFilters(query);
            expect(filters).toHaveLength(1);
        })

        it('Pushing price filter', () => {
            let query = {price: 20}
            const filters = filterService.prepareFilters(query);
            expect(filters).toHaveLength(1);
        })

        it('Pushing distance filter', () => {
            let query = {distance: 30}
            const filters = filterService.prepareFilters(query);
            expect(filters).toHaveLength(1);
        })

        it('Pushing rating filter', () => {
            let query = {rating: 3}
            const filters = filterService.prepareFilters(query);
            expect(filters).toHaveLength(1);
        })

    });
});