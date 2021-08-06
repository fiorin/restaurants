import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantService } from '../restaurant.service';

describe('RestaurantService', () => {

    let service;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          RestaurantService
        ],
      }).compile();
      service = await module.get<RestaurantService>(RestaurantService);
    });

    describe('Load restaurants', () => {

      it('Restaurant array loaded', async () => {
          const restaurants = service.loadRestaurants();
          expect(Array.isArray(restaurants)).toBe(true);
          expect(restaurants.length).toBeGreaterThan(0);
      })  

      it('Restaurants array contains objects', async () => {
          const restaurants = service.loadRestaurants();
          expect(Array.isArray(restaurants)).toBe(true);
          expect(restaurants[0]).toBeInstanceOf(Object);
      })   

    });
});