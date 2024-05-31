import { ApiProperty } from '@nestjs/swagger';

export   class Interior {
  @ApiProperty({ description: 'The type of material used in the interior' })
  material: string;

  @ApiProperty({ description: 'The color of the interior' })
  color: string;

  constructor(material: string, color: string) {
    this.material = material;
    this.color = color;
  }
}