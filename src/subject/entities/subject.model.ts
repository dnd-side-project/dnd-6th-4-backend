import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Subject')
export class Subject {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
    id: number;

    @Column()
    @ApiProperty({ description: "클래스 과목이나 클래스 네이밍을 위한 칼럼입니다."})
    subject_nm: string

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "number", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    salary?: number;

    @Column()
    @ApiProperty({ description: "회차를 저장할 칼럼입니다."})
    monthly_cnt: number;

    @Column('time', { nullable: true, default: null })
    @ApiProperty({ type: "Date", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    class_time?: Date;

    @Column('date', { nullable: true, default: null })
    @ApiProperty({ type: "Date", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    class_day?: Date;

    @Column()
    @ApiProperty({ description: "선생님 고유 아이디 넘버를 저장할 칼럼입니다.."})
    teacher_id: number;

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    student_id: number;

    @Column()
    @ApiProperty({ description: "색상을 저장할 칼럼입니다."})
    color: number;
}