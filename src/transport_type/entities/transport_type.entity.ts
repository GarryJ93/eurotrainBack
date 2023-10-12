import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransportType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @ManyToMany(() => Itinerary, (itinerary) => itinerary.type)
  itinerary?: Itinerary[];
}
