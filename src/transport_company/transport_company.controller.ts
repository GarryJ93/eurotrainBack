import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { TransportCompanyService } from './transport_company.service';
import { ApiTags } from '@nestjs/swagger';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('transport-company')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
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
  async findOne(@Param('id') id: string) {
    try {
      return await this.transportCompanyService.findOne(+id);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in TransportCompanyController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }
}
