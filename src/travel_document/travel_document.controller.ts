import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TravelDocumentService } from './travel_document.service';
import { CreateTravelDocumentDto } from './dto/create-travel_document.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('travel-document')
@ApiTags('Travel-document')
export class TravelDocumentController {
  constructor(private readonly travelDocumentService: TravelDocumentService) {}

  @Post()
  create(@Body() createTravelDocumentDto: CreateTravelDocumentDto) {
    return this.travelDocumentService.create(createTravelDocumentDto);
  }

  @Get()
  findAll() {
    return this.travelDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelDocumentService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelDocumentService.remove(+id);
  }
}