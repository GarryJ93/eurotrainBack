import { Injectable } from '@nestjs/common';
import { CreateStopDto } from './dto/create-stop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stop } from './entities/stop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StopService {
  constructor(
    @InjectRepository(Stop)
    private stopRepository: Repository<Stop>,
  ) {}
  async create(createStopDto: CreateStopDto) {
    const newStop = this.stopRepository.create(createStopDto);
    const result = await this.stopRepository.save(newStop);
    return result;
  }

  findAll() {
    return `This action returns all stop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stop`;
  }
}
