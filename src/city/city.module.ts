import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { PassportModule } from '@nestjs/passport';
import { StayCat } from 'src/stay_cat/entities/stay_cat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([City, StayCat]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
