import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCityDto } from './dto/update-city.dto';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('city')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  // @UseGuards(AuthGuard())
  async create(@Body() createCityDto: CreateCityDto) {
    try {
      const result = await this.cityService.create(createCityDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.cityService.findAll();
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.findAll:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.cityService.findOne(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get('country/:id')
  async findOneWithCountry(@Param('id') id: string) {
    try {
      const result = await this.cityService.findOne(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.findOneWithCountry:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    try {
      const result = await this.cityService.update(+id, updateCityDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.update:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      const result = await this.cityService.remove(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CityController.remove:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
