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
import { TravelDocumentService } from './travel_document.service';
import { CreateTravelDocumentDto } from './dto/create-travel_document.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';

@Controller('travel-document')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Travel-document')
export class TravelDocumentController {
  constructor(private readonly travelDocumentService: TravelDocumentService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createTravelDocumentDto: CreateTravelDocumentDto) {
    try {
      return await this.travelDocumentService.create(createTravelDocumentDto);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.travelDocumentService.findAll();
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.travelDocumentService.findOne(+id);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      return await this.travelDocumentService.remove(+id);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }
}
