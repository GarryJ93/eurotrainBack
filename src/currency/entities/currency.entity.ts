import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  initial: string;

  @OneToMany(() => Country, (country) => country.currency)
  @JoinColumn({ name: 'id_currency' })
  country: Country;
}
