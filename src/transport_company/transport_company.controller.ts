import { Controller, Get, Param } from '@nestjs/common';
import { TransportCompanyService } from './transport_company.service';

@Controller('transport-company')
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
