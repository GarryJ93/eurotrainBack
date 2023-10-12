import { Module } from '@nestjs/common';
import { StayCatService } from './stay_cat.service';
import { StayCatController } from './stay_cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StayCat } from './entities/stay_cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StayCat])],
  controllers: [StayCatController],
  providers: [StayCatService],
})
export class StayCatModule {}
