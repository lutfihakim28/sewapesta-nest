import { Base } from 'src/lib/entity/base.entity';
import { Column } from 'typeorm';

export class Profile extends Base {
  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  address: string
}