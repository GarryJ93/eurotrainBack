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
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('currency')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createCurrencyDto: CreateCurrencyDto) {
    try {
      const result = await this.currencyService.create(createCurrencyDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CurrencyController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.currencyService.findAll();
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CurrencyController.findAll:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.currencyService.findOne(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CurrencyController.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  @Delete(':id')
  // @UseGuards(AuthGuard())
  async remove(@Param('id') id: string) {
    try {
      const result = await this.currencyService.remove(+id);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CurrencyController.remove:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
