import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  // @UseGuards(AuthGuard())
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

  @Get('country/:id')
  findOneWithCountry(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
