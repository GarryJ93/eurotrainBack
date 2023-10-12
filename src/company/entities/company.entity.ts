import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id_transport_company: number;

  @PrimaryColumn()
  id_itinerary: number;
}
