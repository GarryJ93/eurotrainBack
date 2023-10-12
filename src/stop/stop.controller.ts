import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StopService } from './stop.service';
import { CreateStopDto } from './dto/create-stop.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('stop')
@ApiTags('Stop')
export class StopController {
  constructor(private readonly stopService: StopService) {}

  @Post()
  create(@Body() createStopDto: CreateStopDto) {
    return this.stopService.create(createStopDto);
  }

  @Get()
  findAll() {
    return this.stopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stopService.findOne(+id);
  }
}
