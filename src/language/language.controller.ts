import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('language')
@ApiTags('Language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @Get()
  findAll() {
    return this.languageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
