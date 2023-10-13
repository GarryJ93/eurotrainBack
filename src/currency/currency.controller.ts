import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('currency')
@ApiTags('Currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currencyService.create(createCurrencyDto);
  }

  @Get()
  findAll() {
    return this.currencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyService.findOne(+id);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.currencyService.remove(+id);
  }
}
