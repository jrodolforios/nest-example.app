import { ApiProperty } from '@nestjs/swagger';

export class Wheel {
  @ApiProperty({ description: 'The size of the wheel in inches' })
  size: number;

  @ApiProperty({ description: 'The type of the wheel' })
  type: string;

  constructor(size: number, type: string) {
    this.size = size;
    this.type = type;
  }
}