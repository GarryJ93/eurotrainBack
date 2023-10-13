import { Injectable } from '@nestjs/common';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transportation } from './entities/transportation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransportationService {
  constructor(
    @InjectRepository(Transportation)
    private transportationRepository: Repository<Transportation>,
  ) {}
  async create(createTransportationDto: CreateTransportationDto) {
    const newTransportation = this.transportationRepository.create(
      createTransportationDto,
    );
    const result = await this.transportationRepository.save(newTransportation);
    return result;
  }
}
