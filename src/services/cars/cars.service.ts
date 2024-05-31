import { Injectable } from '@nestjs/common';
import { HttpService } from '../../core/services/http.service';
import { Car } from 'src/models/car/car';

@Injectable()
export class CarsService {
    constructor(private readonly httpService: HttpService) {

    }
    async getCars(): Promise<Car> {
        const data = await this.httpService.get<Car>(process.env.CARS_URL + "/cars");
        return data;
    }
}
