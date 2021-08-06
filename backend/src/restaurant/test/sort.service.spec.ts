import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantDto } from '../dto/restaurant.dto';
import { SortService } from '../sort/sort.service';

describe('SortService', () => {

        let service;

        beforeEach(async () => {
            const module: TestingModule = await Test.createTestingModule({
                providers: [
                    SortService
                ],
            }).compile();
            service = await module.get<SortService>(SortService);
        });

        describe('Sorting', () => {

                let restaurants: RestaurantDto[];
                it('Sorting by sorter distance', async () => {
                        
                    restaurants = [
                        {
                                name: 'Restaurant 1',
                                customer_rating: 3,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 3,
                                distance: 2,
                                price: 20,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 3,
                                distance: 3,
                                price: 20,
                                cuisine_id: 1
                        }
                    ];
                    
                    const sorted = service.sort(restaurants);
                    expect(sorted[0].distance).toBeLessThanOrEqual(sorted[1].distance);
                    expect(sorted[1].distance).toBeLessThanOrEqual(sorted[2].distance);
                })  
                
                it('Sorting by best rating on equal distance', async () => {
                        
                    restaurants = [
                        {
                                name: 'Restaurant 1',
                                customer_rating: 3,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 5,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 4,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        }
                    ];
                    
                    const sorted = service.sort(restaurants);
                    expect(sorted[0].distance).toEqual(sorted[1].distance);
                    expect(sorted[0].customer_rating).toBeGreaterThanOrEqual(sorted[1].customer_rating);
                }) 
                
                it('Sorting by lower price on equal distance and rating', async () => {
                        
                    restaurants = [
                        {
                                name: 'Restaurant 1',
                                customer_rating: 3,
                                distance: 4,
                                price: 30,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 3,
                                distance: 4,
                                price: 10,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 3,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        }
                    ];
                    
                    const sorted = service.sort(restaurants);
                    expect(sorted[0].distance).toEqual(sorted[1].distance);
                    expect(sorted[0].customer_rating).toEqual(sorted[1].customer_rating);
                    expect(sorted[0].price).toBeLessThanOrEqual(sorted[1].price);
                }) 
                
                it('Distance, rating and price equal', async () => {
                        
                    restaurants = [
                        {
                                name: 'Restaurant 1',
                                customer_rating: 3,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        },
                        {
                                name: 'Restaurant 2',
                                customer_rating: 3,
                                distance: 4,
                                price: 20,
                                cuisine_id: 1
                        }
                    ];
                    
                    const sorted = service.sort(restaurants);
                    expect(sorted[0].distance).toEqual(sorted[1].distance);
                    expect(sorted[0].customer_rating).toEqual(sorted[1].customer_rating);
                    expect(sorted[0].price).toEqual(sorted[1].price);
                }) 
        });

        describe('Limit', () => {

            let restaurants: RestaurantDto[];
            it('Sorting by sorter distance', async () => {
                    
            let restaurant: RestaurantDto = {
                name: 'Restaurant 1',
                customer_rating: 3,
                distance: 4,
                price: 20,
                cuisine_id: 1
            };
            restaurants = new Array(10).fill(restaurant,0,10);
                
            const sorted = service.limit(restaurants);
            expect(sorted).toHaveLength(5);
        })  
            
    });
});