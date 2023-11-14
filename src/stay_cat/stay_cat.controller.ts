import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { StayCatService } from './stay_cat.service';
import { ApiTags } from '@nestjs/swagger';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('stay-cat')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Stay-cat')
export class StayCatController {
  constructor(private readonly stayCatService: StayCatService) {}

  @Get()
  async findAll() {
    try {
      return await this.stayCatService.findAll();
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in StayCatController.findAll:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.stayCatService.findOne(+id);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in StayCatController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }
}
