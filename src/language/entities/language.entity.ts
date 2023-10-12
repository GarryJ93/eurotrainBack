import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @OneToMany(() => Country, (country) => country.language)
  @JoinColumn({ name: 'id_language' })
  country: Country;
}
