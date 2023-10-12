import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from './entities/language.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}
  async create(createLanguageDto: CreateLanguageDto) {
    const newLanguage = this.languageRepository.create(createLanguageDto);
    const result = await this.languageRepository.save(newLanguage);
    return result;
  }

  async findAll() {
    return await this.languageRepository.find();
  }

  async findOne(id: number) {
    const languageFound = await this.languageRepository.findOneBy({
      id: id,
    });
    if (!languageFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return languageFound;
  }

  async remove(id: number) {
    const languageFound = await this.languageRepository.findOneBy({
      id: id,
    });
    if (!languageFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.languageRepository.remove(languageFound);
  }
}
