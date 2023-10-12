import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StayCat } from './entities/stay_cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StayCatService {
  constructor(
    @InjectRepository(StayCat)
    private stayCatRepository: Repository<StayCat>,
  ) {}
  async findAll() {
    return await this.stayCatRepository.find();
  }

  async findOne(id: number) {
    const stayCatFound = await this.stayCatRepository.findOneBy({
      id: id,
    });
    if (!stayCatFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return stayCatFound;
  }
}
