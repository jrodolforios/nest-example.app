import { ApiProperty } from '@nestjs/swagger';

export class Engine {
  @ApiProperty({ description: 'The type of the engine' })
  type: string;

  @ApiProperty({ description: 'The horsepower of the engine' })
  horsepower: number;

  constructor(type: string, horsepower: number) {
    this.type = type;
    this.horsepower = horsepower;
  }
}
