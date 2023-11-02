import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { PassportModule } from '@nestjs/passport';
import { ImagePipe } from 'src/pipes/image.pipe';

@Module({
  imports: [
    MulterModule.register(),
    TypeOrmModule.forFeature([Photo]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PhotoController],
  providers: [PhotoService, ImagePipe],
})
export class PhotoModule {}
