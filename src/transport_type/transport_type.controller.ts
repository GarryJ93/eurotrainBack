import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { TransportTypeService } from './transport_type.service';
import { ApiTags } from '@nestjs/swagger';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('transport-type')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Transport-type')
export class TransportTypeController {
  constructor(private readonly transportTypeService: TransportTypeService) {}

  @Get()
  findAll() {
    return this.transportTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.transportTypeService.findOne(+id);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in TransportTypeController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }
}
