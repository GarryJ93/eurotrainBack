import { Controller, Post, Body, UseGuards, UseFilters } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('transportation')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createTransportationDto: CreateTransportationDto) {
    try {
      return await this.transportationService.create(createTransportationDto);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in TransportationController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }
}
