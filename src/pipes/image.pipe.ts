import { Injectable, PipeTransform } from '@nestjs/common';
import { accessSync } from 'node:fs';
import * as path from 'path';

import sharp from 'sharp';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from 'src/photo/entities/photo.entity';

@Injectable()
export class ImagePipe implements PipeTransform<any, Promise<any>> {
  constructor(
    @InjectRepository(Photo)
    private imageRepository: Repository<Photo>,
  ) {}

  async transform(body: {
    file: Express.Multer.File;
    idCity: string | null;
    idCountry: string;
  }): Promise<any> {
    console.log(body);
    const image = body.file;

    const pathToSave = path.resolve('public/images');

    try {
      accessSync(pathToSave);
      const imageType = image.mimetype.split('/')[1];
      const originalName = path.parse(image.originalname).name;
      const filename = Date.now() + '-' + originalName + `.webp`;

      console.log('imageType:', imageType);
      console.log('originalName:', originalName);
      console.log('filename:', filename);

      console.log('Before Sharp:', body);
      await sharp(image.buffer)
        .toFormat('webp', { lossless: true, quality: 70, effort: 2 })
        .toFile(path.join(pathToSave, filename));
      console.log('After Sharp:', body);
      const savedImage = await this.imageRepository.save({
        name: filename,
        size: image.size,
        mimetype: 'image/webp',
        id_city: Number(body.idCity) || null,
        id_country: Number(body.idCountry),
      });
      console.log(savedImage);

      return savedImage;
    } catch (err) {
      console.error('Error', err);
    }
  }
}
