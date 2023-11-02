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
  // async create(body: {
  //   file: Express.Multer.File;
  //   idCity: string;
  //   idCountry: string;
  // }) {
  //   console.log(body);
  //   return await this.photoRepository.save({
  //     name: body.file.filename,
  //     mimetype: body.file.mimetype,
  //     size: body.file.size,
  //     id_city: Number(body.idCity) || null,
  //     id_country: Number(body.idCountry),
  //   });
  // }

  async findOne(id: number, res): Promise<StreamableFile> {
    const result = await this.photoRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException(`The photo ${id} is not found !`);
    }
    const imageFile = createReadStream(
      join(process.cwd(), 'public/images', result.name),
    );
    res.set('Content-Type', result.mimetype);
    return new StreamableFile(imageFile);
  }

  async remove(id: number) {
    const photoFound = await this.photoRepository.findOneBy({
      id: id,
    });
    if (!photoFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.photoRepository.remove(photoFound);
  }
}
