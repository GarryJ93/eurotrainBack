import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransportType } from './entities/transport_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransportTypeService {
  constructor(
    @InjectRepository(TransportType)
    private transportTypeRepository: Repository<TransportType>,
  ) {}
  async findAll() {
    return await this.transportTypeRepository.find();
  }

  async findOne(id: number) {
    const typeFound = await this.transportTypeRepository.findOneBy({
      id: id,
    });
    if (!typeFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return typeFound;
  }
}
