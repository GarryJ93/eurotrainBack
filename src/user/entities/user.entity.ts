import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import {
  Column,
  DeleteDateColumn,
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

  @DeleteDateColumn()
  delete_at: Date;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.creator, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_user' })
  itinerary: Itinerary;
}
