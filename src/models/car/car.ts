import { ApiProperty } from '@nestjs/swagger';
import { Engine } from './engine';
import { Wheel } from './wheel';
import { Interior } from './interior';

export class Car {

  @ApiProperty({ description: 'The make of the car' })
  make: string;

  @ApiProperty({ description: 'The model of the car' })
  model: string;

  @ApiProperty({ description: 'The year the car was manufactured' })
  year: number;

  @ApiProperty({ type: () => Engine, description: 'Engine details of the car' })
  engine: Engine;

  @ApiProperty({ type: () => [Wheel], description: 'Details of the car wheels' })
  wheels: Wheel[];

  @ApiProperty({ type: () => Interior, description: 'Interior details of the car' })
  interior: Interior;

  constructor(make: string, model: string, year: number, engine: Engine, wheels: Wheel[], interior: Interior) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.wheels = wheels;
    this.interior = interior;
  }
}
