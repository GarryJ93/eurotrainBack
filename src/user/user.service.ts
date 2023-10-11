import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    const result = await this.userRepository.save(newUser);
    return result;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.userRepository.findOneBy({
      id: id,
    });
    const userUpdated: Partial<User> = {
      ...userFound,
      name: updateUserDto.name,
      email: updateUserDto.email,
      password: updateUserDto.password,
      motivation: updateUserDto.motivation,
      access: updateUserDto.access,
      // mettre les propriètés modifiables
    };

    if (!userFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    Object.assign(userFound, userUpdated);
    this.userRepository.save(userFound);
    return userFound;
  }

  async remove(id: number) {
    const userFound = await this.userRepository.findOneBy({
      id: id,
    });
    if (!userFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.userRepository.remove(userFound);
  }
}
