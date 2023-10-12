import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './entities/currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}
  async create(createCurrencyDto: CreateCurrencyDto) {
    const newCurrency = this.currencyRepository.create(createCurrencyDto);
    const result = await this.currencyRepository.save(newCurrency);
    return result;
  }

  async findAll() {
    return await this.currencyRepository.find();
  }

  async findOne(id: number) {
    const currencyFound = await this.currencyRepository.findOneBy({
      id: id,
    });
    if (!currencyFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return currencyFound;
  }

  async remove(id: number) {
    const currencyFound = await this.currencyRepository.findOneBy({
      id: id,
    });
    if (!currencyFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.currencyRepository.remove(currencyFound);
  }
}
