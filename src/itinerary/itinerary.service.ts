import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
// import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Itinerary } from './entities/itinerary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
  ) {}
  async create(createItineraryDto: CreateItineraryDto) {
    const newWay = this.itineraryRepository.create(createItineraryDto);
    const result = await this.itineraryRepository.save(newWay);
    // result.id;
    return result;
  }

  async findAll() {
    return await this.itineraryRepository.find();
  }

  async findOne(id: number) {
    const cityFound = await this.itineraryRepository.findOneBy({
      id: id,
    });
    if (!cityFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return cityFound;
  }

  // update(id: number, updateItineraryDto: UpdateItineraryDto) {
  //   return `This action updates a #${id} itinerary`;
  // }

  async remove(id: number) {
    const wayFound = await this.itineraryRepository.findOneBy({
      id: id,
    });
    if (!wayFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.itineraryRepository.remove(wayFound);
  }
}
