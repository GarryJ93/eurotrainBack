import { City } from 'src/city/entities/city.entity';
import { Currency } from 'src/currency/entities/currency.entity';
import { Language } from 'src/language/entities/language.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import { TravelDocument } from 'src/travel_document/entities/travel_document.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  schengen: boolean;

  @Column()
  observation: string;

  @Column()
  id_language: number;

  @Column()
  id_currency: number;

  @Column()
  id_travel_document: number;

  @ManyToOne(() => Language, (language) => language.country, {
    eager: true,
  })
  @JoinColumn({ name: 'id_language' })
  language: Language;

  @ManyToOne(() => Currency, (currency) => currency.country, {
    eager: true,
  })
  @JoinColumn({ name: 'id_currency' })
  currency: Currency;

  @ManyToOne(() => TravelDocument, (docs) => docs.country, {
    eager: true,
  })
  @JoinColumn({ name: 'id_travel_document' })
  docs: TravelDocument;

  @OneToMany(() => City, (city) => city.country)
  @JoinColumn({ name: 'id_country' })
  city: City;

  @OneToMany(() => Photo, (photo) => photo.country, { eager: true })
  @JoinColumn({ name: 'id_country' })
  photo: Photo;
}
