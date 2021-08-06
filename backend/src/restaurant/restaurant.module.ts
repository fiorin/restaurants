import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { SortModule } from './sort/sort.module';
import { FilterModule } from './filter/filter.module';
import { FilterService } from './filter/filter.service';
import { SortService } from './sort/sort.service';
import { CuisineService } from './cuisine.service';

@Module({
    imports: [
        SortModule,
        FilterModule,
    ],
    controllers: [
        RestaurantController
    ],
    providers: [
        RestaurantService,
        FilterService,
        SortService,
        CuisineService,
    ],
})

export class RestaurantModule {}
