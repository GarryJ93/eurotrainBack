import { ApiProperty } from '@nestjs/swagger';

export class CreateStopDto {
  @ApiProperty()
  id_city: number;
  @ApiProperty()
  id_itinerary: number;
}
