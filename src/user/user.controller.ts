import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  UseFilters,
  // UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ErrorHandlerService } from 'src/services/error-handler/error-handler.service';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
// import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseFilters(new CustomExceptionFilter(new ErrorHandlerService()))
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    try {
      return await this.userService.findOne(+id);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return await this.userService.update(+id, updateUserDto);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    try {
      return await this.userService.remove(+id);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }

  @Delete('/softDelete/:id')
  @UseGuards(AuthGuard('jwt'))
  async softDeleteUser(@Param('id') id: string) {
    try {
      return await this.userService.softDeleteUser(+id);
    } catch (error) {
      throw error; // You can handle or log the error as needed
    }
  }
}
