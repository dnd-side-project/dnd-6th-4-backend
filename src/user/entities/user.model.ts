import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    email: string;
  
    @Column()
    user_nm: string;
  
    @Column()
    password: string;

    @Column()
    role: number;

    @Column()
    phone_num: string;
}