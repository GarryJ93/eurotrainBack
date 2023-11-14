import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('transportation')
@ApiTags('Transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTransportationDto: CreateTransportationDto) {
    return this.transportationService.create(createTransportationDto);
  }
}
