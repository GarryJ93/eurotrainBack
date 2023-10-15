import { Module } from '@nestjs/common';
import { StopService } from './stop.service';
import { StopController } from './stop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stop } from './entities/stop.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stop]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [StopController],
  providers: [StopService],
})
export class StopModule {}
