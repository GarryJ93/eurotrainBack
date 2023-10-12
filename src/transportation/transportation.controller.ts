import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('transportation')
@ApiTags('Transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Post()
  create(@Body() createTransportationDto: CreateTransportationDto) {
    return this.transportationService.create(createTransportationDto);
  }

  @Get()
  findAll() {
    return this.transportationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportationService.findOne(+id);
  }
}
