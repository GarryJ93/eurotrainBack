import { Controller, Get, Param } from '@nestjs/common';
import { StayCatService } from './stay_cat.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('stay-cat')
@ApiTags('Stay-cat')
export class StayCatController {
  constructor(private readonly stayCatService: StayCatService) {}

  @Get()
  findAll() {
    return this.stayCatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stayCatService.findOne(+id);
  }
}
