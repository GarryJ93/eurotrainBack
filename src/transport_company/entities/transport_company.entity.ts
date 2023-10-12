import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransportCompany {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  link_url: string;

  @ManyToMany(() => Itinerary, (itinerary) => itinerary.company)
  itinerary?: Itinerary[];
}
