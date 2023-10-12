import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty()
  id_transport_company: number;
  @ApiProperty()
  id_itinerary: number;
}
