import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async create(createCountryDto: CreateCountryDto) {
    const newCountry = this.countryRepository.create(createCountryDto);
    const result = await this.countryRepository.save(newCountry);
    return result;
  }

  async findAll() {
    return await this.countryRepository.find();
  }

  async findOne(id: number) {
    const countryFound = await this.countryRepository.findOneBy({
      id: id,
    });
    if (!countryFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return countryFound;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const countryFound = await this.countryRepository.findOneBy({
      id: id,
    });
    const countryUpdated: Partial<Country> = {
      ...countryFound,
      name: updateCountryDto.name,
      initial: updateCountryDto.initial,
      schengen: updateCountryDto.schengen,
      observation: updateCountryDto.observation,
      id_currency: updateCountryDto.id_currency,
      id_travel_document: updateCountryDto.id_travel_document,
      // mettre les propriètés modifiables
    };

    if (!countryFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    Object.assign(countryFound, countryUpdated);
    this.countryRepository.save(countryFound);
    return countryFound;
  }

  async remove(id: number) {
    const countryFound = await this.countryRepository.findOneBy({
      id: id,
    });
    if (!countryFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.countryRepository.remove(countryFound);
  }
}
