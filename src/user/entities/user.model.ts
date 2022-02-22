import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	user_nm: string;

	@Column()
	password: string;

	@Column()
	role: number;

	@Column()
	phone_num: string;

	@Column({ nullable: true, default: null })
	parent_phone_num: string;
}
