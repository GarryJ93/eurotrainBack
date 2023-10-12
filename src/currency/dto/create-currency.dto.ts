import { ApiProperty } from '@nestjs/swagger';

export class CreateCurrencyDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  initial: string;
}
