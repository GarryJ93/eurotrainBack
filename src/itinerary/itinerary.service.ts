import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
// import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Itinerary } from './entities/itinerary.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { CreateTransportationDto } from 'src/transportation/dto/create-transportation.dto';
import { Transportation } from 'src/transportation/entities/transportation.entity';
import { Stop } from 'src/stop/entities/stop.entity';
import { CreateStopDto } from 'src/stop/dto/create-stop.dto';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Transportation)
    private transportationRepository: Repository<Transportation>,
    @InjectRepository(Stop)
    private stopRepository: Repository<Stop>,
  ) {}
  async create(createItineraryDto: CreateItineraryDto) {
    const newWay = this.itineraryRepository.create(createItineraryDto);
    const result = await this.itineraryRepository.save(newWay);
    const id_itinerary = result.id;
    for (const company of createItineraryDto.companyTab) {
      const id_transport_company = company.id;
      console.log(id_transport_company, id_itinerary);
      const newCompany: CreateCompanyDto = {
        id_transport_company,
        id_itinerary,
      };
      await this.companyRepository.save(newCompany);
    }
    for (const type of createItineraryDto.transportType) {
      const id_transport_type = type.id;
      console.log(id_transport_type);
      const newType: CreateTransportationDto = {
        id_transport_type,
        id_itinerary,
      };
      await this.transportationRepository.save(newType);
    }
    for (const stop of createItineraryDto.cityStop) {
      const id_city = stop.id;
      const newStop: CreateStopDto = {
        id_city,
        id_itinerary,
      };
      await this.stopRepository.save(newStop);
    }
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
