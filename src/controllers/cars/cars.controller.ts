import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomErrorResponse } from '../../core/responses/defaultErrorResponse';
import { CarsService } from 'src/services';
import { Car } from 'src/models/car/car';

@Controller('Cars')
@ApiTags('Cars')
export class CarsController {
    constructor(private readonly CarsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Get Cars', description: 'Return the Cars' })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: Car,
  })
  @ApiResponse({
    status: 400,
    description: 'Wrong Operation',
    type: CustomErrorResponse,
  })
  async getDefaultCarsId(): Promise<Car> {
    return await this.CarsService.getCars();
  }
}
