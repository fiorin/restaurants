import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        RestaurantModule
    ],
    controllers: [
        AppController
    ],
    providers: [],
})

export class AppModule {}
