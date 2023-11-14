import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { City } from 'src/city/entities/city.entity';
import { TransportCompany } from 'src/transport_company/entities/transport_company.entity';
import { TransportType } from 'src/transport_type/entities/transport_type.entity';

export class CreateItineraryDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_origin_city: number;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_destination_city: number;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_user: number;
  @ApiProperty()
  @ValidateNested()
  @IsNotEmpty()
  company: TransportCompany[];
  @ApiProperty()
  @ValidateNested()
  @IsNotEmpty()
  type: TransportType[];
  @ApiProperty()
  @ValidateNested()
  cityStop: City[];
}
