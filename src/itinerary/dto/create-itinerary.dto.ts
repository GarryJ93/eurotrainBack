import { ApiProperty } from '@nestjs/swagger';
import { City } from 'src/city/entities/city.entity';
import { TransportCompany } from 'src/transport_company/entities/transport_company.entity';
import { TransportType } from 'src/transport_type/entities/transport_type.entity';

export class CreateItineraryDto {
  @ApiProperty()
  id_origin_city: number;
  @ApiProperty()
  id_destination_city: number;
  @ApiProperty()
  id_user: number;
  @ApiProperty()
  company: TransportCompany[];
  @ApiProperty()
  type: TransportType[];
  @ApiProperty()
  cityStop: City[];
}
