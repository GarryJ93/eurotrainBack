import { Controller, Get, Param } from '@nestjs/common';
import { TransportTypeService } from './transport_type.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('transport-type')
@ApiTags('Transport-type')
export class TransportTypeController {
  constructor(private readonly transportTypeService: TransportTypeService) {}

  @Get()
  findAll() {
    return this.transportTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportTypeService.findOne(+id);
  }
}
