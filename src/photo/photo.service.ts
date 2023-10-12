import { Injectable, NotFoundException, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}
  create(img: Express.Multer.File) {
    console.log('notre img' + img.originalname);
    return this.photoRepository.save({
      name: img.filename,
      mimetype: img.mimetype,
      size: img.size,
    });
  }

  async findOne(id: number, res): Promise<StreamableFile> {
    const result = await this.photoRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException(`The photo ${id} is not found !`);
    }
    const imageFile = createReadStream(
      join(process.cwd(), 'uploads', result.name),
    );
    res.set('Content-Type', result.mimetype);
    console.log('mon image', imageFile);
    return new StreamableFile(imageFile);
  }
}
