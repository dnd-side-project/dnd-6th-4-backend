import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('User')
export class User {
	@PrimaryGeneratedColumn()
	@ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
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
	@ApiProperty({ description: "필수로 작성하실 필요는 없습니다.", default: false, required: false})
	parent_phone_num: string;
}
