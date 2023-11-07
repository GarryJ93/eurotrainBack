import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
import { UpdateCityDto } from './dto/update-city.dto';
import { StayCat } from 'src/stay_cat/entities/stay_cat.entity';
@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectRepository(StayCat)
    private catRepository: Repository<StayCat>,
  ) {}
  async create(createCityDto: CreateCityDto) {
    const newCity = this.cityRepository.create(createCityDto);
    const result = await this.cityRepository.save(newCity);
    return result;
  }

  async findAll() {
    return await this.cityRepository.find({
      relations: ['country'],
    });
  }

  async findOne(id: number) {
    const cityFound = await this.cityRepository.findOne({
      where: { id },
      relations: ['photo', 'country'],
    });
    if (!cityFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return cityFound;
  }

  async findOneWithCountry(id: number) {
    const cityFound = await this.cityRepository.findOne({
      where: { id },
      relations: ['country'],
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

  async update(id: number, updateCityDto: UpdateCityDto) {
    const cityFound = await this.cityRepository.findOneBy({ id: id });

    if (!cityFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }

    // Mise à jour des propriétés modifiables du DTO
    cityFound.id_stay_cat = updateCityDto.id_stay_cat;

    // Mise à jour de la relation avec Cat
    if (updateCityDto.id_stay_cat) {
      const cat = await this.catRepository.findOneBy({
        id: updateCityDto.id_stay_cat,
      });
      if (!cat) {
        throw new NotFoundException(
          `La catégorie avec l'id ${updateCityDto.id_stay_cat} n'existe pas`,
        );
      }
      cityFound.cat = cat;
    }

    // Enregistrement des modifications
    await this.cityRepository.save(cityFound);

    return cityFound;
  }
}
