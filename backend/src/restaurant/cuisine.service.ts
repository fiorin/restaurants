import { Injectable } from '@nestjs/common'
import { CuisineDto } from './dto/cuisine.dto';
import * as cuisinesJson from '../../database/cuisines.json';

@Injectable()
export class CuisineService {

    getCuisines(): CuisineDto[] {
        return this.loadCuisines();
    }


    loadCuisines(): CuisineDto[]{
        return cuisinesJson;
    }
}