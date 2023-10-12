import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  motivation: string;

  @Column()
  access: boolean;

  @Column()
  full_access: boolean;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.creator)
  @JoinColumn({ name: 'id_user' })
  itinerary: Itinerary;
}
