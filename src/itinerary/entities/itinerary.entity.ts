import { City } from 'src/city/entities/city.entity';
import { TransportCompany } from 'src/transport_company/entities/transport_company.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Itinerary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_origin_city: number;

  @Column()
  id_destination_city: number;

  @Column()
  id_user: number;

  @ManyToOne(() => City, (originCity) => originCity.departure, { eager: true })
  @JoinColumn({ name: 'id_origin_city' })
  originCity: City;

  @ManyToOne(() => City, (destinationCity) => destinationCity.departure, {
    eager: true,
  })
  @JoinColumn({ name: 'id_origin_city' })
  destinationCity: City;

  @ManyToOne(() => User, (creator) => creator.itinerary, {
    eager: true,
  })
  @JoinColumn({ name: 'id_user' })
  creator: User;

  @ManyToMany(() => TransportCompany, (company) => company.itinerary, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'company',
    joinColumn: {
      name: 'id_itinerary',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_transport_company',
      referencedColumnName: 'id',
    },
  })
  company?: TransportCompany[];
}
