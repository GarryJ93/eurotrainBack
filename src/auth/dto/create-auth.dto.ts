import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  motivation: string;
  @ApiProperty()
  access: boolean;
  @ApiProperty()
  full_access: boolean;
}
