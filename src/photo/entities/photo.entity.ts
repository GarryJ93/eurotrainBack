import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  @Column()
  id_city: number;

  @Column()
  id_country: number;

  @ManyToOne(() => Country, (country) => country.photo)
  @JoinColumn({ name: 'id_country' })
  country: Country;

  @ManyToOne(() => City, (city) => city.photo)
  @JoinColumn({ name: 'id_city' })
  city: City;
}
