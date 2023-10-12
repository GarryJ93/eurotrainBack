import { Module } from '@nestjs/common';
import { TravelDocumentService } from './travel_document.service';
import { TravelDocumentController } from './travel_document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelDocument } from './entities/travel_document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelDocument])],
  controllers: [TravelDocumentController],
  providers: [TravelDocumentService],
})
export class TravelDocumentModule {}
