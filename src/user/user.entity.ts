import { Base } from 'src/lib/entity/base.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from 'src/lib/enums/Role.enum';

@Entity()
export class User extends Base {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ enum: RoleEnum })
  role: RoleEnum;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
