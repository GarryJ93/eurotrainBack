import { Module } from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { ItineraryController } from './itinerary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from './entities/itinerary.entity';
import { Company } from 'src/company/entities/company.entity';
import { Transportation } from 'src/transportation/entities/transportation.entity';
import { Stop } from 'src/stop/entities/stop.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Itinerary, Company, Transportation, Stop]),
  ],
  controllers: [ItineraryController],
  providers: [ItineraryService],
})
export class ItineraryModule {}
