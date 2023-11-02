import { Country } from 'src/country/entities/country.entity';
import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import { StayCat } from 'src/stay_cat/entities/stay_cat.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  id_country: number;

  @Column()
  id_stay_cat: number;

  @ManyToOne(() => Country, (country) => country.city, {
    eager: true,
  })
  @JoinColumn({ name: 'id_country' })
  country: Country;

  @ManyToOne(() => StayCat, (cat) => cat.city, {
    eager: true,
  })
  @JoinColumn({ name: 'id_stay_cat' })
  cat: StayCat;

  @OneToMany(() => Photo, (photo) => photo.city, { eager: true })
  @JoinColumn({ name: 'id_photo' })
  photo: Photo;

  @OneToMany(() => Itinerary, (departure) => departure.originCity)
  @JoinColumn({ name: 'id_origin_city' })
  departure: Itinerary;

  @OneToMany(() => Itinerary, (arrival) => arrival.destinationCity)
  @JoinColumn({ name: 'id_origin_city' })
  arrival: Itinerary;

  @ManyToMany(() => Itinerary, (itinerary) => itinerary.cityStop)
  itinerary?: Itinerary[];
}
