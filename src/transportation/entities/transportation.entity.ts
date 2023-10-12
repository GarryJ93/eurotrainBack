import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Transportation {
  @PrimaryColumn()
  id_transport_type: number;

  @PrimaryColumn()
  id_itinerary: number;
}
