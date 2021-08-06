import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        FilterService
    ],
})

export class FilterModule {}
