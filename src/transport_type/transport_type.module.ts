import { Module } from '@nestjs/common';
import { TransportTypeService } from './transport_type.service';
import { TransportTypeController } from './transport_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportType } from './entities/transport_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportType])],
  controllers: [TransportTypeController],
  providers: [TransportTypeService],
})
export class TransportTypeModule {}
