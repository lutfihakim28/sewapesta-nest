import { Base } from 'src/lib/entity/base.entity';
import { User } from 'src/user/user.entity';
import { Column, OneToMany } from 'typeorm';

export class Branch extends Base {
  @Column()
  name: string

  @Column()
  cpName: string

  @Column()
  cpPhone: string

  @Column()
  address: string

  @OneToMany(
    () => User,
    (user) => user.branch
  )
  users: User
}