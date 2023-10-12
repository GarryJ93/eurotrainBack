import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}
  async create(createCityDto: CreateCityDto) {
    const newCity = this.cityRepository.create(createCityDto);
    const result = await this.cityRepository.save(newCity);
    return result;
  }

  async findAll() {
    return await this.cityRepository.find();
  }

  async findOne(id: number) {
    const cityFound = await this.cityRepository.findOneBy({
      id: id,
    });
    if (!cityFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return cityFound;
  }

  async remove(id: number) {
    const cityFound = await this.cityRepository.findOneBy({
      id: id,
    });
    if (!cityFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.cityRepository.remove(cityFound);
  }
}
