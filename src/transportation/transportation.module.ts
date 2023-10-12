import { Module } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { TransportationController } from './transportation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transportation } from './entities/transportation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transportation])],
  controllers: [TransportationController],
  providers: [TransportationService],
})
export class TransportationModule {}
