import { Module } from '@nestjs/common';
import { TransportCompanyService } from './transport_company.service';
import { TransportCompanyController } from './transport_company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportCompany } from './entities/transport_company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportCompany])],
  controllers: [TransportCompanyController],
  providers: [TransportCompanyService],
})
export class TransportCompanyModule {}
