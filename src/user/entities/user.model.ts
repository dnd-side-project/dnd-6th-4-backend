import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('User')
export class User {
	@PrimaryGeneratedColumn()
	@ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
	id: number;

	@Column()
	@ApiProperty({ description: "email 형식으로 작성 부탁드립니다."})
	email: string;

	@Column()
	@ApiProperty({ description: "닉네임 입니다."})
	user_nm: string;

	@Column({ nullable: true, default: null })
	@ApiProperty({ description: "비밀번호 입니다. 아직 인코딩 디코딩 기능은 추가하지 않았습니다.", default: false, required: false})
	password?: string;

	@Column()
	@ApiProperty({ description: "0: 학생, 1: 선생님 과 같이 역할을 분리해주세요." })
	role: number;

	@Column()
	@ApiProperty({ description: "핸드폰 번호 형식으로 작성해주세요."})
	phone_num: string;

	@Column({ nullable: true, default: null })
	@ApiProperty({ description: "필수로 작성하실 필요는 없습니다.", default: false, required: false})
	parent_phone_num: string;

	@Column({ nullable: true, default: null })
	@ApiProperty({ description: "요청하신 프로필 유알엘 입니다."})
	profile_url: string;
}
