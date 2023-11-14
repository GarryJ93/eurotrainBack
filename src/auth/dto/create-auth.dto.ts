import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Min(12)
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  motivation: string;
  @ApiProperty()
  access: boolean;
  @ApiProperty()
  full_access: boolean;
}
