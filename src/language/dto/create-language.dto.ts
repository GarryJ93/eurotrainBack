import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
  // @ApiProperty()
  // id: number;
  @ApiProperty()
  name: string;
}
