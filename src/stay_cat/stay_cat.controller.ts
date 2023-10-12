import { Controller, Get, Param } from '@nestjs/common';
import { StayCatService } from './stay_cat.service';

@Controller('stay-cat')
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
