import { Injectable } from '@nestjs/common'

@Injectable()
export class SortService {

    sort(restaurants: any): any{
        function compare( a, b ) {
            if (a.distance < b.distance) {
                return -1;
            } else {
                if (a.distance > b.distance) 
                    return 1;
            }
            if (a.customer_rating > b.customer_rating) {
                return -1;
            } else {
                if (a.customer_rating < b.customer_rating) 
                    return 1;
            }
            if (a.price < b.price) {
                return -1;
            } else {
                if (a.price > b.price) 
                    return 1;
            }
            return Math.random() < 0.5 ? -1 : 1;
        }
        return restaurants.sort(compare);
    }

    limit(restaurants: any): any {
        return restaurants.slice(0,5);
    }

}