import { ApiProperty } from '@nestjs/swagger';

export class CreateTravelDocumentDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
