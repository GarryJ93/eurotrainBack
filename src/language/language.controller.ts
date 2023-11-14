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
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('language')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createLanguageDto: CreateLanguageDto) {
    try {
      const result = await this.languageService.create(createLanguageDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in LanguageController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.languageService.findAll();
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in LanguageController.findAll:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.languageService.findOne(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in LanguageController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      const result = await this.languageService.remove(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in LanguageController.remove:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
