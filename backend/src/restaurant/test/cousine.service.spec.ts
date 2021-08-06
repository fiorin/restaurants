import { Test, TestingModule } from '@nestjs/testing';
import { CuisineService } from '../cuisine.service';

describe('CuisineService', () => {

    let service;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          CuisineService
        ],
      }).compile();
      service = await module.get<CuisineService>(CuisineService);
    });

    describe('Load restaurants', () => {

        it('Cuisines array loaded', async () => {
            const cuisines = service.loadCuisines();
            expect(Array.isArray(cuisines)).toBe(true);
            expect(cuisines.length).toBeGreaterThan(0);
        })  

        it('Cuisines array contains objects', async () => {
            const cuisines = service.loadCuisines();
            expect(Array.isArray(cuisines)).toBe(true);
            expect(cuisines[0]).toBeInstanceOf(Object);
        })   

    });

    describe('List cuisines', () => {

        it('Cuisines array loaded', async () => {
            const cuisines = service.getCuisines();
            expect(Array.isArray(cuisines)).toBe(true);
            expect(cuisines.length).toBeGreaterThan(0);
        })  

    });
});