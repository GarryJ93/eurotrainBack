import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
// import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Itinerary } from './entities/itinerary.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { Transportation } from 'src/transportation/entities/transportation.entity';
import { Stop } from 'src/stop/entities/stop.entity';
import { CreateStopDto } from 'src/stop/dto/create-stop.dto';
import { CreateTransportationDto } from 'src/transportation/dto/create-transportation.dto';

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
    console.log(createItineraryDto);
    const newWay = this.itineraryRepository.create(createItineraryDto);
    const result = await this.itineraryRepository.save(newWay);
    const id_itinerary = result.id;
    console.log('Companies :', createItineraryDto.company);
    console.log('Types :', createItineraryDto.type);
    console.log('Stops :', createItineraryDto.cityStop);

    console.log('Avant boucle company');
    const companyPromises =
      createItineraryDto.company && createItineraryDto.company.length > 0
        ? createItineraryDto.company.map(async (company) => {
            const id_transport_company = company.id;
            console.log(id_transport_company, id_itinerary);
            const newCompany: CreateCompanyDto = {
              id_transport_company,
              id_itinerary,
            };
            console.log('Avant sauvegarde de la company');
            await this.companyRepository.save(newCompany);
            console.log('Après sauvegarde de la company');
          })
        : [];

    const typePromises =
      createItineraryDto.type && createItineraryDto.type.length > 0
        ? createItineraryDto.type.map(async (type) => {
            const id_transport_type = type.id;
            console.log(id_transport_type);
            const newType: CreateTransportationDto = {
              id_transport_type,
              id_itinerary,
            };
            await this.transportationRepository.save(newType);
            console.log('Après sauvegarde du type');
          })
        : [];

    const stopPromises =
      createItineraryDto.cityStop && createItineraryDto.cityStop.length > 0
        ? createItineraryDto.cityStop.map(async (stop) => {
            const id_city = stop.id;
            const newStop: CreateStopDto = {
              id_city,
              id_itinerary,
            };
            await this.stopRepository.save(newStop);
            console.log('Après sauvegarde des escales');
          })
        : [];

    // Attendre que toutes les promesses se résolvent
    await Promise.all([...companyPromises, ...typePromises, ...stopPromises]);

    return result;
  }

  async findAll() {
    return await this.itineraryRepository.find({
      relations: ['originCity', 'destinationCity'],
    });
  }

  async findOne(id: number) {
    const itineraryFound = await this.itineraryRepository.findOne({
      where: { id },
      relations: [
        'destinationCity',
        'destinationCity.photo',
        'destinationCity.country',
        'originCity',
        'originCity.country',
        'cityStop',
        'cityStop.photo',
        'type',
        'company',
      ],
    });
    if (!itineraryFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return itineraryFound;
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
