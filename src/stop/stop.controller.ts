import { Controller, Post, Body } from '@nestjs/common';
import { StopService } from './stop.service';
import { CreateStopDto } from './dto/create-stop.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('stop')
@ApiTags('Stop')
export class StopController {
  constructor(private readonly stopService: StopService) {}

  @Post()
  // @UseGuards(AuthGuard())
  create(@Body() createStopDto: CreateStopDto) {
    return this.stopService.create(createStopDto);
  }
}
