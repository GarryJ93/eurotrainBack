import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
