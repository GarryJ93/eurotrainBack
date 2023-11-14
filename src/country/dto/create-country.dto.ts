import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  // @ApiProperty()
  // id: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  initial: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  schengen: boolean;
  @ApiProperty()
  @IsString()
  observation: string;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_language: number;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_currency: number;
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id_travel_document: number;
}
