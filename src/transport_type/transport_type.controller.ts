import { Controller, Get, Param } from '@nestjs/common';
import { TransportTypeService } from './transport_type.service';

@Controller('transport-type')
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
