import { ApiProperty } from '@nestjs/swagger';

export class CreateTransportationDto {
  @ApiProperty()
  id_transport_type: number;
  @ApiProperty()
  id_itinerary: number;
}
