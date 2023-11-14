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

  // ... (d'autres méthodes du service)

  async findOne(id: number, res): Promise<StreamableFile> {
    try {
      const result = await this.photoRepository.findOneBy({ id });
      if (!result) {
        throw new NotFoundException(`The photo ${id} is not found !`);
      }
      const imageFile = createReadStream(
        join(process.cwd(), 'public/images', result.name),
      );
      res.set('Content-Type', result.mimetype);
      return new StreamableFile(imageFile);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in PhotoService.findOne:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }

  async remove(id: number) {
    try {
      const photoFound = await this.photoRepository.findOneBy({
        id: id,
      });
      if (!photoFound) {
        throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
      }
      return await this.photoRepository.remove(photoFound);
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in PhotoService.remove:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
