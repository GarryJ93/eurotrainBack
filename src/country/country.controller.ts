import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('country')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createCountryDto: CreateCountryDto) {
    try {
      return await this.countryService.create(createCountryDto);
    } catch (error) {
      // Log the error using the ErrorHandlerService or perform other actions
      throw error; // Rethrow the error to be caught by the exception filter
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.countryService.findAll();
    } catch (error) {
      // Log the error using the ErrorHandlerService or perform other actions
      throw error; // Rethrow the error to be caught by the exception filter
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const numericId = +id;

    if (isNaN(numericId)) {
      throw new BadRequestException("L'ID fourni n'est pas valide.");
    }

    try {
      return await this.countryService.findOne(numericId);
    } catch (error) {
      // Log the error using the ErrorHandlerService or perform other actions
      throw error; // Rethrow the error to be caught by the exception filter
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    try {
      return await this.countryService.update(+id, updateCountryDto);
    } catch (error) {
      // Log the error using the ErrorHandlerService or perform other actions
      throw error; // Rethrow the error to be caught by the exception filter
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      return await this.countryService.remove(+id);
    } catch (error) {
      // Log the error using the ErrorHandlerService or perform other actions
      throw error; // Rethrow the error to be caught by the exception filter
    }
  }
}
