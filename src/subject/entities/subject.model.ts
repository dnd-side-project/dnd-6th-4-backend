import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Subject')
export class Subject {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "자동 생성 칼럼으로 생성할 떄에는 무시"})
    id: number;

    @Column()
    subject_nm: string

    @Column()
    salary: number;

    @Column()
    monthly_cnt: number;

    @Column('time')
    class_time: Date;

    @Column('date')
    class_day: Date;

    @Column()
    teacher_id: number;

    @Column({ nullable: true, default: null })
    @ApiProperty({ type: "string", default: null, required: false, description: "필수로 작성할 필요는 없습니다."})
    student_id: number;

    @Column()
    color: number;
}