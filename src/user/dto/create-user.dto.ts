import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
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
  @Min(12)
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsString()
  motivation: string;
  @ApiProperty()
  access: boolean;
  @ApiProperty()
  full_access: boolean;
  @ApiProperty()
  delete_at: Date;
}
