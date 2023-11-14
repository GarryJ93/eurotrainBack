import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { StopService } from './stop.service';
import { CreateStopDto } from './dto/create-stop.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('stop')
@ApiTags('Stop')
export class StopController {
  constructor(private readonly stopService: StopService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createStopDto: CreateStopDto) {
    return this.stopService.create(createStopDto);
  }
}
