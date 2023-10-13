import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('city')
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
