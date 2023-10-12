import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const newCompany = this.companyRepository.create(createCompanyDto);
    const result = await this.companyRepository.save(newCompany);
    return result;
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
