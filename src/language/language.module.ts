import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './entities/language.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Language]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
