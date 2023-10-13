import {
  Controller,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@Controller('photo')
@ApiTags('Photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('monFichier'))
  // @UseGuards(AuthGuard('jwt'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.photoService.create(file);
  }
  @Get(':id')
  getImageById(
    @Param('id') id: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    return this.photoService.findOne(+id, res);
  }
}
