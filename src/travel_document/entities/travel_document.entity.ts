import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TravelDocument {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @OneToMany(() => Country, (country) => country.docs)
  @JoinColumn({ name: 'id_travel_document' })
  country: Country;
}
