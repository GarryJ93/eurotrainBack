import { Controller, Post, Body, UseGuards, UseFilters } from '@nestjs/common';
import { StopService } from './stop.service';
import { CreateStopDto } from './dto/create-stop.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('stop')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Stop')
export class StopController {
  constructor(private readonly stopService: StopService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createStopDto: CreateStopDto) {
    try {
      return await this.stopService.create(createStopDto);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in StopController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception global
    }
  }
}
