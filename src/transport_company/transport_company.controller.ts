import { Controller, Get, Param } from '@nestjs/common';
import { TransportCompanyService } from './transport_company.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('transport-company')
@ApiTags('Transport-company')
export class TransportCompanyController {
  constructor(
    private readonly transportCompanyService: TransportCompanyService,
  ) {}

  @Get()
  findAll() {
    return this.transportCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportCompanyService.findOne(+id);
  }
}
