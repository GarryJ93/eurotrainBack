import { Module } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { TransportationController } from './transportation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transportation } from './entities/transportation.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transportation]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [TransportationController],
  providers: [TransportationService],
})
export class TransportationModule {}
