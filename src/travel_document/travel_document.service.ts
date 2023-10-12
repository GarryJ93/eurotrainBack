import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDocumentDto } from './dto/create-travel_document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelDocument } from './entities/travel_document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TravelDocumentService {
  constructor(
    @InjectRepository(TravelDocument)
    private travelDocumentRepository: Repository<TravelDocument>,
  ) {}
  async create(createTravelDocumentDto: CreateTravelDocumentDto) {
    const newDoc = this.travelDocumentRepository.create(
      createTravelDocumentDto,
    );
    const result = await this.travelDocumentRepository.save(newDoc);
    return result;
  }

  async findAll() {
    return this.travelDocumentRepository.find();
  }

  async findOne(id: number) {
    const docFound = await this.travelDocumentRepository.findOneBy({
      id: id,
    });
    if (!docFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return docFound;
  }

  async remove(id: number) {
    const docFound = await this.travelDocumentRepository.findOneBy({
      id: id,
    });
    if (!docFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.travelDocumentRepository.remove(docFound);
  }
}
