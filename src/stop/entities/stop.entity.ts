import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Stop {
  @PrimaryColumn()
  id_city: number;

  @PrimaryColumn()
  id_itinerary: number;
}
