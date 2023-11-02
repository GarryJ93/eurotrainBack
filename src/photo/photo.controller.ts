import {
  Controller,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
  Res,
  StreamableFile,
  Body,
  Delete,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ImagePipe } from 'src/pipes/image.pipe';

@Controller('photo')
@ApiTags('Photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly imagePipe: ImagePipe,
  ) {}

  // @Post()
  // @UseInterceptors(FileInterceptor('monFichier'))
  // // @UseGuards(AuthGuard())
  // async uploadImage(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: { idCity: string; idCountry: string },
  // ) {
  //   console.log(body, file);
  //   return await this.photoService.create({ file, ...body });
  // }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { idCity: string; idCountry: string },
  ): Promise<any> {
    return this.imagePipe.transform({ ...body, file });
  }

  @Get(':id')
  getImageById(
    @Param('id') id: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    return this.photoService.findOne(+id, res);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.photoService.remove(+id);
  }
}
