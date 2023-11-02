import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  id_country: number;
  @ApiProperty()
  id_stay_cat: number;
}
