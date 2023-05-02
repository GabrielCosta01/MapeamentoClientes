import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, BeforeUpdate, BeforeInsert, OneToMany } from 'typeorm';
import { Contact } from './contact.entity';
import { Exclude } from 'class-transformer';
import { hashSync } from 'bcrypt';

@Entity('client')
export class Client{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 100 })
  @Exclude()
  password: string

  @Column()
  telephone: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Contact, (contacts) => contacts.client)
  contacts: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword(){
      this.password = hashSync(this.password, 10)
  }
}