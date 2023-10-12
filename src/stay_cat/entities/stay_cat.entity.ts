import { City } from 'src/city/entities/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StayCat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @OneToMany(() => City, (city) => city.cat)
  @JoinColumn({ name: 'id_stay_cat' })
  city: City;
}
