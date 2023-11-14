import { Controller, Post, Body, UseGuards, UseFilters } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';

@Controller('company')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      const result = await this.companyService.create(createCompanyDto);
      return result; // ou renvoyez une réponse formatée si nécessaire
    } catch (error) {
      // Gérez l'erreur, par exemple, loggez l'erreur
      console.error('Error in CompanyController.create:', error);
      throw error; // Renvoyez l'erreur pour qu'elle soit traitée par le filtre d'exception
    }
  }
}
