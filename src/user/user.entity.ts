import { Base } from 'src/lib/entity/base.entity';
import { BeforeInsert, Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from 'src/lib/enums/Role.enum';
import { Profile } from 'src/profile/profile.entity';
import { Branch } from 'src/branch/branch.entity';

@Entity()
export class User extends Base {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ enum: RoleEnum })
  @Index()
  role: RoleEnum;

  @OneToOne(
    () => Profile,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn()
  @Index()
  profile: Profile

  @ManyToOne(
    () => Branch,
    (branch) => branch.users
  )
  branch: Branch

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
