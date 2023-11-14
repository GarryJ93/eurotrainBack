import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('itinerary')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Itinerary')
export class ItineraryController {
  constructor(private readonly itineraryService: ItineraryService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createItineraryDto: CreateItineraryDto) {
    try {
      const result = await this.itineraryService.create(createItineraryDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in ItineraryController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.itineraryService.findAll();
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in ItineraryController.findAll:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const result = await this.itineraryService.findOne(id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in ItineraryController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      const result = await this.itineraryService.remove(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in ItineraryController.remove:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
