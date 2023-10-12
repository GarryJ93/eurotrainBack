import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  schengen: boolean;
  @ApiProperty()
  observation: string;
  @ApiProperty()
  id_language: number;
  @ApiProperty()
  id_currency: number;
  @ApiProperty()
  id_travel_document: number;
}
