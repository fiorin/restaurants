import { Module } from '@nestjs/common';
import { SortService } from './sort.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        SortService
    ],
})

export class SortModule {}
