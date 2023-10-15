import { Module } from '@nestjs/common';
import { TravelDocumentService } from './travel_document.service';
import { TravelDocumentController } from './travel_document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelDocument } from './entities/travel_document.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([TravelDocument]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [TravelDocumentController],
  providers: [TravelDocumentService],
})
export class TravelDocumentModule {}
