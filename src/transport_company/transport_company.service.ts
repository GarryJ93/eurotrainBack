import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransportCompany } from './entities/transport_company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransportCompanyService {
  constructor(
    @InjectRepository(TransportCompany)
    private transportCompanyRepository: Repository<TransportCompany>,
  ) {}
  async findAll() {
    return await this.transportCompanyRepository.find();
  }

  async findOne(id: number) {
    const companyFound = await this.transportCompanyRepository.findOneBy({
      id: id,
    });
    if (!companyFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return companyFound;
  }
}
